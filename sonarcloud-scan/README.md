# TypeScript project for analysis in SonarCloud

To run:

`dagger -m "github.com/fluent-ci-templates/sonar-pipeline@mod" call analyze --src . --token $SONAR_TOKEN --organization <ORG> --project-key <KEY> --sources <DIRS>`

* Replace the `<ORG>`, `<KEY>`, and `<DIRS>` with:
  * `<ORG>`: Organisation name
  * `<KEY>`: Project key 
  * `<DIRS>`: Comma-separated list of directories to be scanned

