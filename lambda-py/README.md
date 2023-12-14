# Sample Poetry Lambda app

To run:

* Authenticate with AWS in your terminal
* `poetry run python lambda_py/handler.py`

To prepare for Lambda:

* `poetry run pip install -t dist/lambda .`
* `cd dist/lambda`
* `zip -x '*.pyc' -r ../lambda.zip .`

The resulting `lambda.zip` should be uploaded to Lambda. 

**Note**: The handler for the function must be set to `lambda_py.handler.handle`
This is formed of: 
* `lambda_py` (the package name)
* `handler` (the file name that contains the entry function)
* `handle` (the function name for the entry point)
