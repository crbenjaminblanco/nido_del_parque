import { NextResponse, type NextRequest } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { defaultLocale, hasLocale, localeCookie, locales } from "@/i18n/config";

function detectLocale(request: NextRequest): string {
  const saved = request.cookies.get(localeCookie)?.value;
  if (saved && hasLocale(saved)) return saved;

  const headers = { "accept-language": request.headers.get("accept-language") ?? "" };
  const languages = new Negotiator({ headers }).languages();
  try {
    return match(languages, locales, defaultLocale);
  } catch {
    return defaultLocale;
  }
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const first = pathname.split("/")[1] ?? "";
  if (hasLocale(first)) {
    // Recuerda el idioma elegido para la próxima visita a "/".
    const res = NextResponse.next();
    if (request.cookies.get(localeCookie)?.value !== first) {
      res.cookies.set(localeCookie, first, { path: "/", maxAge: 60 * 60 * 24 * 365, sameSite: "lax" });
    }
    return res;
  }

  const url = request.nextUrl.clone();
  url.pathname = `/${detectLocale(request)}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Omite internos de Next, archivos estáticos (con extensión) y rutas de metadatos.
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
