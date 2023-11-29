# TypeScript project for analysis in SonarCloud

To run:

`dagger -m "github.com/fluent-ci-templates/sonar-pipeline@mod" call analyze --src . --token $SONAR_TOKEN --organization <ORG> --project-key <KEY> --sources <DIRS>`

* Replace the `<ORG>`, `<KEY>`, and `<DIRS>` with:
  * `<ORG>`: Organisation name
  * `<KEY>`: Project key 
  * `<DIRS>`: Comma-separated list of directories to be scanned

**Notes**: 

* `--sources <DIRS>` is **required**, but you do not need to provide a full list of sources if they are listed in a `sonar-project.properties` file. They will all be scanned.
* Other properties in `sonar-project.properties` will be read as normal and take priority over command line arguments (e.g. `projectKey`, `sonar.tests`, `sonar.testExecutionReportPaths`, ...)

