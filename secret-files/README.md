openssl genrsa -out private.pem 512
openssl rsa -in private.pem -outform PEM -pubout -out public.pem
