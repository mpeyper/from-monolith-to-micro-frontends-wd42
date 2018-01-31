export const environmentYml = `
web_applications:
- name: asis-web-adviser
  app-version: 3.2.0.20180112133551
  badges:
  - name: asis/adviser-ioofonline-assets
    config-version: '20171221111525'
  - name: asis/adviser-portfolioonline-assets
    config-version: '20171221111525'
  - name: asis/bendigosuperadviser-portfolioonline-assets
    config-version: '20171221111525'
  web_artifacts:
  - name: package-of-packages
    artifact-version: 2.4.7
  - name: asis-web-display-message
    artifact-version: 1.0.26
  - name: asis-web-investments
    artifact-version: 2.0.1302
  - name: asis-web-new-business-application
    artifact-version: 1.0.1053
  - name: asis-web-recent-forms
    artifact-version: 1.0.202
  - name: asis-web-transactions
    artifact-version: 1.12.145
  - name: asis-web-insurance
    artifact-version: 1.0.211
  - name: asis-web-fees
    artifact-version: 1.0.168
`.trim()

export const artifactsIndex = `
{
  "name": "asis-web-adviser"
  "web_artifacts": {
    "asis-web-fees": {
      "version": "1.0.168",
      "gitsha": "5f12dae9803c1565b4bcf4ca86779b59c9a2096c",
      "uri": "/web_artifacts/asis-web-fees/5f12dae9803c1565b4bcf4ca86779b59c9a2096c/asis-web-fees.js",
      "name": "asis-web-fees"
    },
    "asis-web-investments": {
      "version": "2.0.1302",
      "gitsha": "d1c9f9aae7923d11c9f01913973158f8605d6abd",
      "uri": "/web_artifacts/asis-web-investments/d1c9f9aae7923d11c9f01913973158f8605d6abd/asis-web-investments.js",
      "name": "asis-web-investments"
    },
    "asis-web-display-message": {
      "version": "1.0.26",
      "gitsha": "42fbb6e184da2697cc9e13653f84349a7cfab054",
      "uri": "/web_artifacts/asis-web-display-message/42fbb6e184da2697cc9e13653f84349a7cfab054/asis-web-display-message.js",
      "name": "asis-web-display-message"
    },
    "asis-web-recent-forms": {
      "version": "1.0.202",
      "gitsha": "bbc2e174ffe275c10af877a85494e77e0dccb885",
      "uri": "/web_artifacts/asis-web-recent-forms/bbc2e174ffe275c10af877a85494e77e0dccb885/asis-web-recent-forms.js",
      "name": "asis-web-recent-forms"
    },
    "asis-web-insurance": {
      "version": "1.0.211",
      "gitsha": "6e208e13e1485d8fdf2e362acaf686caf4a51fde",
      "uri": "/web_artifacts/asis-web-insurance/6e208e13e1485d8fdf2e362acaf686caf4a51fde/asis-web-insurance.js",
      "name": "asis-web-insurance"
    },
    "asis-web-transactions": {
      "version": "1.12.145",
      "gitsha": "ded9f50e73508e22e2b2480e7eb141bf2f99433d",
      "uri": "/web_artifacts/asis-web-transactions/ded9f50e73508e22e2b2480e7eb141bf2f99433d/asis-web-transactions.js",
      "name": "asis-web-transactions"
    },
    "package-of-packages": {
      "version": "2.4.7",
      "gitsha": "21bf46ecc105b7df88e6761957d4c186ca71657f",
      "uri": "/web_artifacts/package-of-packages/21bf46ecc105b7df88e6761957d4c186ca71657f/package-of-packages.js",
      "name": "package-of-packages"
    },
    "asis-web-new-business-application": {
      "version": "1.0.1053",
      "gitsha": "41501bfa5e450805c5c1301d53e544055fc25e97",
      "uri": "/web_artifacts/asis-web-new-business-application/41501bfa5e450805c5c1301d53e544055fc25e97/asis-web-new-business-application.js",
      "name": "asis-web-new-business-application"
    }
  }
}
`.trim()