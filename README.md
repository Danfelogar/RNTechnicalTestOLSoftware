# Proyecto de React Native con Backend y Emuladores

Este proyecto de React Native incluye un backend y configuraciones para ejecutarlo en emuladores de iOS y Android. Asegúrate de seguir los pasos a continuación para configurar y ejecutar el proyecto correctamente.

## Link del video en youtube (Demo tecnica)
[![Alt text](https://img.youtube.com/vi/ffMDuPOLEjg/0.jpg)](https://www.youtube.com/watch?v=ffMDuPOLEjg)

## Requisitos Previos

- Node.js 18.14.2
- Yarn (instálalo con `npm install -g yarn`)
- Xcode (para emulador iOS)
- Dispositivo virtual iPhone 14 Pro Max en Xcode (o ajusta según tu preferencia)

## Pasos de Configuración

1. Clona este repositorio a tu máquina local:

```bash
git clone <URL_DEL_REPOSITORIO>
cd NOMBRE_DEL_PROYECTO


## Pasos de Configuración

1. Instala las dependencias del proyecto (asegúrate de tener Node.js 18.14.2): yarn

2. Instala los pods para el proyecto de iOS (requiere tener CocoaPods instalado): cd ios
pod install
cd ..

3. Levanta el servidor Metro para el proyecto de React Native: yarn start

4. En otra terminal, levanta el backend usando json-server en el puerto 3100: yarn start-up-json-server


5. En otra terminal, levanta el backend usando json-server en el puerto 3100: yarn start-up-json-server

6. Levanta el emulador de iOS (Asegúrate de tener un dispositivo virtual iPhone 14 Pro Max en Xcode): yarn ios

7. Levanta el emulador de Android: yarn android

8. Puede ejecutar los tests unitarios de toda la app con: yarn test




