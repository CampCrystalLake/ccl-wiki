MKDOCS := uvx --with "mkdocs-material[imaging]" --with watchdog mkdocs

.PHONY: help serve serve-social build build-social clean fmt

help: ## show this help
	@grep -E '^[a-zA-Z_-]+:.*##' $(MAKEFILE_LIST) | awk -F ':.*## ' '{printf "  %-14s %s\n", $$1, $$2}'

serve: ## serve locally with live reload (social plugin off)
	$(MKDOCS) serve --livereload --watch-theme

serve-social: ## serve locally with social plugin enabled
	CI=true $(MKDOCS) serve --livereload --watch-theme

build: ## build static site to site/
	$(MKDOCS) build

build-social: ## build with social plugin enabled (matches CI)
	CI=true $(MKDOCS) build

clean: ## remove built site
	rm -rf site/

fmt: ## format docs/styles/config with prettier
	npx --yes prettier --write .
