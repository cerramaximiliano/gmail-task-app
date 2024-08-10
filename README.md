
# Gmail Task App

## Descripción

Gmail Task App es una aplicación en Node.js que lee correos de Gmail y realiza tareas automatizadas según el remitente, asunto, archivos adjuntos y contenido del correo. La aplicación interactúa con un bot de Telegram, permitiéndote recibir archivos adjuntos por ese medio. Todo está configurado para seguir la hora local de Argentina, utilizando `node-cron` para la automatización y MongoDB como base de datos.

## Características

- Lectura automática de correos desde Gmail.
- Procesamiento de correos en función de su contenido.
- Integración con un bot de Telegram para notificaciones y envío de archivos adjuntos.
- Tareas automatizadas siguiendo la hora local de Argentina.

## Requisitos

- Node.js
- MongoDB
- Cuenta de Gmail con acceso a la API
- Cuenta de Telegram con bot

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu_usuario/gmail-task-app.git
   cd gmail-task-app
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Configura las variables de entorno en el archivo `.env`:
   ```env
   MONGO_URI=your_mongodb_uri
   CLIENT_ID=your_gmail_api_client_id
   CLIENT_SECRET=your_gmail_api_client_secret
   REDIRECT_URI=your_gmail_api_redirect_uri
   REFRESH_TOKEN=your_gmail_api_refresh_token
   TELEGRAM_TOKEN=your_telegram_bot_token
   TELEGRAM_CHAT_ID=your_telegram_chat_id
   ```

4. Inicia la aplicación:
   ```bash
   node app.js
   ```

## Uso

La aplicación monitorea automáticamente tu bandeja de entrada y realiza tareas programadas. Puedes recibir archivos adjuntos en Telegram y ver el estado de tus correos en la base de datos MongoDB.

## Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

```
/gmail-task-app
|-- /config
|   |-- db.js
|-- /controllers
|   |-- emailController.js
|   |-- telegramController.js
|-- /models
|   |-- email.js
|-- /routes
|   |-- emailRoutes.js
|   |-- telegramRoutes.js
|-- /services
|   |-- gmailService.js
|   |-- telegramService.js
|-- /tasks
|   |-- taskScheduler.js
|-- app.js
|-- .env
```

## Licencia

Este proyecto está licenciado bajo la Licencia MIT.
