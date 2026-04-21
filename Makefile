MKDOCS := CI=true uvx --with "mkdocs-material[imaging]" --with watchdog mkdocs

.PHONY: serve fmt

serve:
	$(MKDOCS) serve --livereload --watch-theme

fmt:
	npx --yes prettier --write .
