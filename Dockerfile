FROM node:16.16-alpine AS builder
WORKDIR /app
COPY package.json .
RUN npm i -g vite
COPY .yarn ./.yarn
COPY .yarnrc.yml .
RUN yarn install
COPY . .

ENV VITE_CORPORATE_NAME="KMPlus Consulting"
ENV VITE_FIREBASE_API_KEY="AIzaSyDHb1QG3EEmbAKaPfingVS4r6Enkfeju4I"
ENV VITE_FIREBASE_AUTH_DOMAIN=smartkmsystem-2705f.firebaseapp.com
ENV VITE_FIREBASE_DATABASE_URL=
ENV VITE_FIREBASE_PROJECT_ID=smartkmsystem-2705f
ENV VITE_FIREBASE_STORAGE_BUCKET=smartkmsystem-2705f.appspot.com
ENV VITE_FIREBASE_MESSAGING_SENDER_ID=634072245724
ENV VITE_FIREBASE_APP_ID=1:634072245724:web:bc597de032b02082f95b19
ENV VITE_JWT_KEY=smartkms2022
ENV VITE_API_KEY=smartkms20221
ENV VITE_API_GATEWAY_URL=
ENV VITE_API_AUTH_SERVICE_URL=https://user-auth-service-portaverse.pelindo.co.id
ENV VITE_API_CMS_SERVICE_URL=https://cms-service-portaverse.pelindo.co.id
ENV VITE_API_REPOSITORY_SERVICE_URL=https://repository-service-portaverse.pelindo.co.id
ENV VITE_API_GROUPS_SERVICE_URL=https://group-service-portaverse.pelindo.co.id
ENV VITE_API_EMPLOYEES_SERVICE_URL=https://employee-service-portaverse.pelindo.co.id
ENV VITE_API_COURSE_SERVICE_URL=https://course-service-portaverse.pelindo.co.id
ENV VITE_API_POSITIONS_SERVICE_URL=https://position-service-portaverse.pelindo.co.id
ENV VITE_API_KMAP_SERVICE_URL=https://kmap-service-portaverse.pelindo.co.id
ENV VITE_API_HQ_SERVICE_URL=https://hq-service-portaverse.pelindo.co.id
ENV VITE_API_NOTIFICATIONS_SERVICE_URL=https://notification-portaverse.pelindo.co.id
ENV VITE_API_SIGNATURE_SERVICE_URL=https://signature-service-portaverse.pelindo.co.id
ENV VITE_API_SEARCH_ENGINE_SERVICE_URL=https://engine-service-portaverse.pelindo.co.id
ENV VITE_SSO_URL=https://portaverse.pelindo.co.id
ENV VITE_KMS_URL=https://knowledge-portaverse.pelindo.co.id
ENV VITE_TMS_URL=https://talent-portaverse.pelindo.co.id
ENV VITE_LMS_URL=https://learning-portaverse.pelindo.co.id
ENV VITE_API_SOCIAL_SERVICE_URL=https://social-portaverse.pelindo.co.id
ENV VITE_API_GAMIFICATION_SERVICE_URL=https://gamification-portaverse.pelindo.co.id
ENV VITE_API_DAILY_QUIZ_SERVICE_URL=https://daily-quiz-portaverse.pelindo.co.id

ENV VITE_API_MYTRAVEL_SERVICE_URL=https://travel.pelindo.co.id

ENV VITE_TRAVEL_AUTH_USERNAME=admin
ENV VITE_TRAVEL_AUTH_PASSWORD=1234

RUN yarn build

##CMD ["yarn", "start"]

FROM nginx:stable-alpine AS server
COPY ./etc/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder ./app/dist /usr/share/nginx/html
EXPOSE 3002
CMD ["nginx", "-g", "daemon off;"]
