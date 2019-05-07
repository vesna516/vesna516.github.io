GULP = node_modules/.bin/gulp

.PHONY: gulp-build gulp-watch

gulp-build: node_modules
	$(GULP) build

gulp-watch: node_modules
	$(GULP) watch

node_modules:
	npm install