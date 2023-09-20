.PHONY: deploy
deploy:
	DEPLOY_PATH="/var/www/dev.collinmmeyer.com/html" ./deploy

.PHONY: build
build: #>
	rm -f .env
	ln -s .env.dev .env
	npm run build

.PHONY: run
run: #>
	rm -f .env
	ln -s .env.dev .env
	npm start