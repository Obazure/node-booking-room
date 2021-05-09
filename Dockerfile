FROM node:14.11.0 as base_image

RUN mkdir /app
WORKDIR /app

COPY ./package.json ./
COPY ./package-lock.json ./
RUN npm install

FROM base_image as build_image
WORKDIR /app

COPY ./tsconfig.json ./
COPY ./.eslintrc ./
COPY ./.prettierrc ./
COPY ./src ./src
RUN npm run build

FROM build_image as app
WORKDIR /app

EXPOSE 80
ENV NODE_ENV=production
ENTRYPOINT ["npm", "run", "serve"]
