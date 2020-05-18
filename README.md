# Public template library for Taskray

A repository of taskray templates available in both csv or json. This is used to import libraries into subscriber orgs.

## Public endpoint

The library resources can be accesed here:
`https://bracketlabs.github.io/template-library`
note: this may change once released

## Copy templates

You can copy a set of csvs in a folder with the id of the template as the name.
Each csv file needs to follow the below namng convertion. Any objects not includesd in the list below are not supported yet.

| ObjectName     |      Filename       |
| -------------- | :-----------------: |
| Project        |    Projects.csv     |
| TaskGroup      |   TaskGroups.csv    |
| Task           |      Tasks.csv      |
| Dependency     |  Dependencies.csv   |
| ChecklistGroup | ChecklistGroups.csv |
| ChecklistItem  | ChecklistItems.csv  |

### Relationships

Id columns are ignore and can be removed from your csvs. In order to relate a child to a parent you can follow this pattern:

`${ObjectName}{csv_row_number}`

For example putting `$Project1` in a task `TASKRAY__Project__c` column will relate that task record to the first project in the csv.

### Preview Image

A preview png image with a size of {todo} and name after the template id should be included in the screens folder.

### Generate template

To generate the json file call:

`npm run convert`

### Deploy

The template are deployed once pushed to origin master.
