FROM nginx:1.24-alpine
#COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY dist/canine-companion-angular/browser /usr/share/nginx/html/
EXPOSE 80
