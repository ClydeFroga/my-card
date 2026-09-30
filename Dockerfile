FROM node:24-alpine
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npx prisma generate && npm run build

EXPOSE 3000
CMD ["sh", "-c", "npx prisma db push && npx prisma db seed && node dist/main"]