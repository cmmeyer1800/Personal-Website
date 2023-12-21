.PHONY: run
run: #>
	rm -f .env
	cp .env.dev .env
	echo "REACT_APP_DATE_TIME='$(shell date)'" >> .env
	npm start

.PHONY: deploy
deploy:
	DEPLOY_PATH="/var/www/dev.collinmmeyer.com/html" ./deploy

.PHONY: build
build: #>
	ENV=DEV ./build-proj