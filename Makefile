.PHONY: deploy
deploy:
	DEPLOY_PATH="/var/www/dev.collinmmeyer.com/html" ./deploy

.PHONY: build
build: #>
	rm -f .env
	ln -s .env.dev .env
	echo "REACT_APP_DATE_TIME='$(shell date)'" >> .env
	npm run build
	sed -i '$ d' .env

.PHONY: run
run: #>
	rm -f .env
	ln -s .env.dev .env
	echo "REACT_APP_DATE_TIME='$(shell date)'" >> .env
	npm start
	sed -i '$ d' .env