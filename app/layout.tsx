import ThemeRegistry from '@/config/mui/ThemeRegistry';
import StoreProvider from '@/lib/StoreProvider';
import '@/styles/global.scss';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import { ReactNode } from 'react';
const opensans = Open_Sans({
  weight: ['400', '300', '500', '700'],
  subsets: ['latin']
});
export const metadata: Metadata = {
  title: 'Discord lite',
  description: '...',
  icons: {
    icon: '/fav.png'
  }
};

interface Root {
  children: ReactNode;
  params: { lang: string };
}

// const setLanguage = async () => {
//   return new Promise((resolve) => {
//     const langList = headers().get("accept-language")?.split(",") || ["en"];
//     const lang = langList[0];
//     localStorage.setItem("language", lang);
//     resolve(lang);
//   });
// };

export default async function RootLayout({ children }: Root) {
  // await setLanguage();
  return (
    <html lang={'en'}>
      <body className={opensans.className}>
        <ThemeRegistry options={{ key: 'mui' }}>
          <StoreProvider>{children}</StoreProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
