import React, { FunctionComponent } from 'react';

import { Paragraph } from './Paragraph';

type Props = {
  clientId: string;
  firstName: string;
  lastName: string;
};
export const Template: FunctionComponent<Props> = ({
  clientId,
  firstName,
  lastName,
}) => (
  <div className="border-t mt-8 pt-8">
    <Paragraph>
      Hierbij wil ik een klacht neerleggen tegen BNP Paribas Fortis en deze
      koppelen aan de klacht met nummer KQ10440226.
    </Paragraph>

    <Paragraph>
      Ik wens namelijk mijn zichtrekening bij deze bank te koppelen aan Cake,
      een betalingsinstelling die een vergunning heeft bij de Nationale Bank van
      België.
    </Paragraph>

    <Paragraph>
      Sinds 14 september 2019 is mijn bank door de Europese PSD2-regelgeving
      verplicht om een interface aan te bieden aan partijen zoals Cake zodat ik
      mijn bankgegevens kan delen met Cake.
    </Paragraph>

    <Paragraph>
      BNP Paribas Fortis heeft tot op vandaag nog steeds geen werkende interface
      waardoor ik geen gebruik kan maken van de diensten van Cake. Deze diensten
      zorgen ervoor dat hun gebruikers geld kunnen verdienen via cashbacks of
      door het delen van hun data met Cake. Ik las dat de gemiddelde gebruiker
      op een paar maanden tijd reeds meer dan 10 euro kon verdienen met Cake.
    </Paragraph>

    <Paragraph>
      Zolang BNP Paribas Fortis geen werkende interface heeft, mis ik de gelden
      waarop iedere Cake-gebruiker recht heeft. De gratis diensten van Cake
      worden aangeboden aan alle klanten met een Belgische bankrekening, enkel
      de klanten van BNP Paribas Fortis kunnen er niet van genieten omdat deze
      bank geen werkende interface heeft. En volgens de wetgeving is dit
      verplicht sinds 14 september 2019.
    </Paragraph>

    <Paragraph>
      Op social media heb ik gelezen dat BNP Paribas Fortis aan Cake het
      volgende heeft laten weten:
    </Paragraph>

    <Paragraph className="italic">
      "There is indeed a difference between the APIs and our own channels, and
      it cannot be solved on the short term. When there is a fix available you
      will of course be invited to test it but I am afraid I cannot give you a
      timeline yet at this stage."
    </Paragraph>

    <Paragraph>
      Dat betekent dat BNP Paribas Fortis geen oplossing heeft op korte termijn
      terwijl we vandaag 9 maanden voorbij de wettelijke deadline zijn.
    </Paragraph>

    <Paragraph>
      Daarom wil ik van BNP Paribas Fortis een schadevergoeding ontvangen die
      minstens gelijk is aan het bedrag dat ik van Cake zou ontvangen moest de
      bank voldoen aan de regelgeving en dit zolang de bank geen werkende
      interface heeft.
    </Paragraph>

    <Paragraph>Met vriendelijke groeten,</Paragraph>

    <Paragraph>
      {`${firstName} ${lastName}`}
      <br />
      {clientId}
    </Paragraph>
  </div>
);
