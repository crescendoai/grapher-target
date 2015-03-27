all: min.js

min.js:
	@npm run target-min.js

test:
	@npm run test