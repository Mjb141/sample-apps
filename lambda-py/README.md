# Sample Poetry Lambda app

To run:

* Authenticate with AWS in your terminal
* `poetry run python lambda_py/handler.py`

To prepare for Lambda:

* `poetry run pip install -t dist/lambda .`
* `cd dist/lambda`
* `zip -x '*.pyc' -r ../lambda.zip .`
