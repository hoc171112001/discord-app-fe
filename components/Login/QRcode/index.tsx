import { useServerTranslation } from "@/config/i18n/server";
import { getLanguage } from "@/utils";
import { FC } from "react";
import QRCode from "react-qr-code";
interface IProps { }

/**
 * @author
 * @function @QrCode
 **/

const lang = getLanguage();

export const LoginQrCode: FC<IProps> = async () => {
  const { t } = await useServerTranslation(lang, "login");
  return (
    <div className="flex items-center justify-center flex-col" style={{ marginRight: -16 }}>
      <div className="qr-wrapper">
        <QRCode
          style={{ height: "auto", maxWidth: "100%", width: "100%" }}
          value={"afsjdadgasjhdgajhdsgdjhagdahsjagdhagdjshagsjhdgajhsdg"}
        />
      </div>
      <p className="mt-4 text-center font-semibold text-xl text-white">
        {t('qrTitle')}
      </p>
      <p className="mt-2 text-center text-desc text-xs w-9/12">
        {t('qrDesc')}
      </p>
    </div>
  );
};
