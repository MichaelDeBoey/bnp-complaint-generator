import React, { FunctionComponent } from 'react';

import { Intro } from "./Intro";
import { Pattern } from "./Pattern";

export const App: FunctionComponent = () => {
  return (
    <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
      <div className="relative max-w-xl mx-auto">
        <Pattern className="absolute left-full transform translate-x-1/2" />

        <Pattern className="absolute right-full bottom-0 transform -translate-x-1/2" />

        <Intro />

        <div className="mt-12 grid grid-cols-1 row-gap-6 sm:grid-cols-2 sm:col-gap-8">
          <div>
            <label
              htmlFor="first_name"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              First name
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                id="first_name"
                className="form-input py-3 px-4 block w-full transition ease-in-out duration-150"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="last_name"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Last name
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                id="last_name"
                className="form-input py-3 px-4 block w-full transition ease-in-out duration-150"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="company"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Client ID (available on your bank card)
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                id="client_id"
                className="form-input py-3 px-4 block w-full transition ease-in-out duration-150"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <span className="w-full inline-flex rounded-md shadow-sm">
              <button
                type="button"
                disabled
                className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
              >
                ⚙️ Generate template
              </button>
            </span>
          </div>
        </div>

        {/*<div>*/}
        {/*  <p className="mt-4 text-lg leading-6 text-gray-500">*/}
        {/*    Hierbij wil ik een klacht neerleggen tegen BNP Paribas Fortis en*/}
        {/*    deze koppelen aan de klacht met nummer KQ10440226.*/}
        {/*  </p>*/}

        {/*  <p className="mt-4 text-lg leading-6 text-gray-500">*/}
        {/*    Ik wens namelijk mijn zichtrekening bij deze bank te koppelen aan*/}
        {/*    Cake, een betalingsinstelling die een vergunning heeft bij de*/}
        {/*    Nationale Bank van België.*/}
        {/*  </p>*/}

        {/*  <p className="mt-4 text-lg leading-6 text-gray-500">*/}
        {/*    Sinds 14 september 2019 is mijn bank door de Europese*/}
        {/*    PSD2-regelgeving verplicht om een interface aan te bieden aan*/}
        {/*    partijen zoals Cake zodat ik mijn bankgegevens kan delen met Cake.*/}
        {/*  </p>*/}

        {/*  <p className="mt-4 text-lg leading-6 text-gray-500">*/}
        {/*    BNP Paribas Fortis heeft tot op vandaag nog steeds geen werkende*/}
        {/*    interface waardoor ik geen gebruik kan maken van de diensten van*/}
        {/*    Cake. Deze diensten zorgen ervoor dat hun gebruikers geld kunnen*/}
        {/*    verdienen via cashbacks of door het delen van hun data met Cake. Ik*/}
        {/*    las dat de gemiddelde gebruiker op een paar maanden tijd reeds 10*/}
        {/*    euro kon verdienen met Cake.*/}
        {/*  </p>*/}

        {/*  <p className="mt-4 text-lg leading-6 text-gray-500">*/}
        {/*    Zolang BNP Paribas Fortis geen werkende interface heeft, mis ik de*/}
        {/*    gelden waarop iedere Cake-gebruiker recht heeft. De gratis diensten*/}
        {/*    van Cake worden aangeboden aan alle klanten met een Belgische*/}
        {/*    bankrekening, enkel de klanten van BNP Paribas Fortis kunnen er niet*/}
        {/*    van genieten omdat deze bank geen werkende interface heeft. En*/}
        {/*    volgens de wetgeving is dit verplicht sinds 14 september 2019.*/}
        {/*  </p>*/}

        {/*  <p className="mt-4 text-lg leading-6 text-gray-500">*/}
        {/*    Op social media heb ik gelezen dat BNP Paribas Fortis aan Cake het*/}
        {/*    volgende heeft laten weten:*/}
        {/*  </p>*/}

        {/*  <p className="mt-4 text-lg leading-6 text-gray-500">*/}
        {/*    "There is indeed a difference between the APIs and our own channels,*/}
        {/*    and it cannot be solved on the short term. When there is a fix*/}
        {/*    available you will of course be invited to test it but I am afraid I*/}
        {/*    cannot give you a timeline yet at this stage."*/}
        {/*  </p>*/}

        {/*  <p className="mt-4 text-lg leading-6 text-gray-500">*/}
        {/*    Dat betekent dat BNP Paribas Fortis geen oplossing heeft op korte*/}
        {/*    termijn terwijl we vandaag 9 maanden voorbij de wettelijke deadline*/}
        {/*    zijn.*/}
        {/*  </p>*/}

        {/*  <p className="mt-4 text-lg leading-6 text-gray-500">*/}
        {/*    Daarom wil ik van BNP Paribas Fortis een schadevergoeding ontvangen*/}
        {/*    die minstens gelijk is aan het bedrag dat ik van Cake zou ontvangen*/}
        {/*    moest de bank voldoen aan de regelgeving en dit zolang de bank geen*/}
        {/*    werkende interface heeft.*/}
        {/*  </p>*/}

        {/*  <p className="mt-4 text-lg leading-6 text-gray-500">*/}
        {/*    Met vriendelijke groeten,*/}
        {/*  </p>*/}

        {/*  <p className="mt-4 text-lg leading-6 text-gray-500">*/}
        {/*    Michaël De Boey<br />*/}
        {/*    11472 82618*/}
        {/*  </p>*/}
        {/*</div>*/}

        {/*<div className="mt-12 grid grid-cols-1 row-gap-6 sm:grid-cols-2 sm:col-gap-8">*/}
        {/*  <div className="sm:col-span-2">*/}
        {/*    <label*/}
        {/*      htmlFor="message"*/}
        {/*      className="block text-sm font-medium leading-5 text-gray-700"*/}
        {/*    >*/}
        {/*      Message*/}
        {/*    </label>*/}
        {/*    <div className="mt-1 relative rounded-md shadow-sm">*/}
        {/*      <textarea*/}
        {/*        id="message"*/}
        {/*        rows={4}*/}
        {/*        readOnly*/}
        {/*        className="form-textarea py-3 px-4 block w-full transition ease-in-out duration-150"*/}
        {/*      />*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
    </div>
  );
};
