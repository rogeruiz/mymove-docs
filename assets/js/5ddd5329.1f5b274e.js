"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[6461],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),m=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=m(a),h=i,c=u["".concat(s,".").concat(h)]||u[h]||d[h]||o;return a?n.createElement(c,r(r({ref:t},p),{},{components:a})):n.createElement(c,r({ref:t},p))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var m=2;m<o;m++)r[m]=a[m];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},79636:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var n=a(87462),i=(a(67294),a(3905));const o={sidebar_position:4},r="How to Migrate the Database",l={unversionedId:"backend/setup/database-migrations",id:"backend/setup/database-migrations",title:"How to Migrate the Database",description:"If you need to change the database schema, you'll need to write a migration. These are the general steps you'll need to follow:",source:"@site/docs/backend/setup/database-migrations.md",sourceDirName:"backend/setup",slug:"/backend/setup/database-migrations",permalink:"/mymove-docs/docs/backend/setup/database-migrations",draft:!1,editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/backend/setup/database-migrations.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"backendSidebar",previous:{title:"How To Backup and Restore the Development Database",permalink:"/mymove-docs/docs/backend/setup/backup-and-restore-dev-database"},next:{title:"Run pre-commit hooks",permalink:"/mymove-docs/docs/backend/setup/run-pre-commit-hooks"}},s={},m=[{value:"Understanding Migrations",id:"understanding-migrations",level:2},{value:"Setup",id:"setup",level:2},{value:"Creating Migrations",id:"creating-migrations",level:2},{value:"<code>milmove gen</code> command",id:"milmove-gen-command",level:3},{value:"Writing migrations",id:"writing-migrations",level:3},{value:"Adding a new table",id:"adding-a-new-table",level:3},{value:"Model/Table Names With Acronyms",id:"modeltable-names-with-acronyms",level:4},{value:"Running Migrations",id:"running-migrations",level:2},{value:"Update Migrations Locally",id:"update-migrations-locally",level:2},{value:"Secure Migrations",id:"secure-migrations",level:2},{value:"Creating Secure Migrations",id:"creating-secure-migrations",level:3},{value:"Secure Migrations for One Environment",id:"secure-migrations-for-one-environment",level:3},{value:"How Secure Migrations Work",id:"how-secure-migrations-work",level:3},{value:"Downloading Secure Migrations",id:"downloading-secure-migrations",level:3},{value:"Notes",id:"notes",level:2},{value:"Why we avoid <code>uuid_generate_v4()</code>",id:"why-we-avoid-uuid_generate_v4",level:3},{value:"Zero-Downtime Migrations",id:"zero-downtime-migrations",level:3}],p={toc:m};function d(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"how-to-migrate-the-database"},"How to Migrate the Database"),(0,i.kt)("p",null,"If you need to change the database schema, you'll need to write a migration. These are the general steps you'll need to follow:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#creating-Migrations"},"Generate a new migration file")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#writing-migrations"},"Add the new SQL to the generated file")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#setup"},"Set up your database")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#running-migrations"},"Run the migrations")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#update-migrations-locally"},"Update migrations locally")),(0,i.kt)("li",{parentName:"ol"},"Test your new migration")),(0,i.kt)("p",null,"After your testing, if you find that you need to change your migration, you'll need to reset your DB (",(0,i.kt)("inlineCode",{parentName:"p"},"make db_<env>_reset"),") and rerun the migrations to make sure your updates are reflected in the local DB instance. "),(0,i.kt)("p",null,"Once you have completed your testing, push your changes up for review! You'll need a review from someone in the DB reviewers group, and if it's a secure migration, you'll need to test your changes on Experimental. Read ",(0,i.kt)("a",{parentName:"p",href:"https://dp3.atlassian.net/l/c/5G1P0dX0"},"these instructions")," to learn about deploying to Experimental."),(0,i.kt)("h2",{id:"understanding-migrations"},"Understanding Migrations"),(0,i.kt)("p",null,"Database migrations are SQL scripts that modify the state of the database (ie, the database schema). They are how we add and modify tables, columns, indexes, comments, and other aspects of our database. We also have migrations that insert constant data into our tables so that we will always have access to certain data values/records. "),(0,i.kt)("p",null,"These scripts are not living files like the rest of our source code. You can think of them as snapshots of the state of the DB over time. ",(0,i.kt)("strong",{parentName:"p"},"In general, we should not update old migration files.")," If you need to change something added in the past, create a new migration that overrides the old one instead. "),(0,i.kt)("p",null,"The MilMove migration files are located in the ",(0,i.kt)("inlineCode",{parentName:"p"},"migrations/app")," directory. There are two subdirectories:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/schema"),": the migrations that define the schema for our DB. This is most likely where you'll be working."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/secure"),": these migrations are adding or modifying sensitive data in the DB. CAC credentials, for example, will be in this directory. You will need to follow special instructions if you are working with these files. ")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"migrations_manifest.txt")," file contains a list of all of the migrations in both ",(0,i.kt)("inlineCode",{parentName:"p"},"schema")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"secure"),". This file is what tells the database which scripts to run when we call the ",(0,i.kt)("inlineCode",{parentName:"p"},"migrate")," command. It will be updated automatically as part of the process of generating a new migration - you will likely never need to make manual updates to this file."),(0,i.kt)("h2",{id:"setup"},"Setup"),(0,i.kt)("p",null,"Before running any of the commands listed here locally, make sure the DB is up and running:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"make db_dev_run\n")),(0,i.kt)("p",null,"and/or"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"make db_test_run\n")),(0,i.kt)("p",null,"To reset the database, use:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"make db_dev_reset\nmake db_test_reset\n")),(0,i.kt)("p",null,"These commands will tear down the existing instance of the database and rebuild a new version. This is useful when you're testing new migrations and you don't want to go through the pain of reverting and reapplying a migration whenever you make an update. Instead, you can start fresh and apply the updated migrations from scratch."),(0,i.kt)("h2",{id:"creating-migrations"},"Creating Migrations"),(0,i.kt)("p",null,"To generate a new migration file, use: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"milmove gen migration -n <migration_name>\n")),(0,i.kt)("p",null,"where ",(0,i.kt)("inlineCode",{parentName:"p"},"<migration_name>")," is a brief description of the action being performed. The name must be in snake case, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"add_status_to_moves"),". This will create a placeholder migration and add it to the manifest."),(0,i.kt)("h3",{id:"milmove-gen-command"},(0,i.kt)("inlineCode",{parentName:"h3"},"milmove gen")," command"),(0,i.kt)("p",null,"There are other subcommands for ",(0,i.kt)("inlineCode",{parentName:"p"},"milmove gen")," that you can leverage to generate models and migrations. To see a list of available subcommands,\nrun ",(0,i.kt)("inlineCode",{parentName:"p"},"milmove gen"),". To run a specific subcommand, use the syntax ",(0,i.kt)("inlineCode",{parentName:"p"},"milmove gen <subcommand>"),". The subcommands include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"migration"),": creates a generic migration for you to populate. ",(0,i.kt)("strong",{parentName:"li"},"This is most likely the one you want to use.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"disable-user-migration"),": creates a migration for disabling a user given their e-mail address."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"duty-stations-migration"),": creates a migration to update duty stations given a CSV of duty station data."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"certs-migration"),": creates a migration to add a certificate for access to electronic orders and the prime api.")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"NOTE: We ",(0,i.kt)("strong",{parentName:"em"},"don't")," use ",(0,i.kt)("inlineCode",{parentName:"em"},"down-migrations")," to revert changes to the schema; any problems are to be fixed by a follow-up migration.")),(0,i.kt)("p",null,"You can also run ",(0,i.kt)("inlineCode",{parentName:"p"},"update-migrations-manifest")," to update the ",(0,i.kt)("inlineCode",{parentName:"p"},"migrations_manifest.txt")," file. This is only necessary if you manually create a new migration file instead of using ",(0,i.kt)("inlineCode",{parentName:"p"},"milmove gen migration")," to generate a new file. There's really no reason to manually create a file; just use ",(0,i.kt)("inlineCode",{parentName:"p"},"milmove gen"),". "),(0,i.kt)("h3",{id:"writing-migrations"},"Writing migrations"),(0,i.kt)("p",null,"When you are writing the code for your new migration, there are a few things you should keep in mind:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Please use SQL.")," There are old instructions about using ",(0,i.kt)("inlineCode",{parentName:"p"},"fizz")," to write migrations instead - ",(0,i.kt)("strong",{parentName:"p"},"do not do this."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"You must manually define all primary keys and indexes. There is nothing in Pop or SQL that will automatically make these for you. Failure to do so may break tools or lead to inefficiencies in the API implementations.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"#why-we-avoid-uuid_generate_v4"},"Avoid using ",(0,i.kt)("inlineCode",{parentName:"a"},"uuid_generate_v4()")),". Instead, please generate a valid UUID4 value using one of the following methods:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Get a valid UUID4 from ",(0,i.kt)("a",{parentName:"p",href:"https://www.uuidgenerator.net/"},"the Online UUID Generator"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Use ",(0,i.kt)("inlineCode",{parentName:"p"},"python -c 'import uuid; print(str(uuid.uuid4()))'"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Use ",(0,i.kt)("inlineCode",{parentName:"p"},"brew install uuidgen; uuidgen")),(0,i.kt)("p",{parentName:"li"},"Never use the same UUID more than once. It should be unique across the whole database. ")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Follow best practices for ensuring ",(0,i.kt)("a",{parentName:"p",href:"#zero-downtime-migrations"},"Zero-Downtime Deploys"),". Your migrations should create a database state that is compatible with the current version of the application code ",(0,i.kt)("em",{parentName:"p"},"and")," the new version of the application code."))),(0,i.kt)("h3",{id:"adding-a-new-table"},"Adding a new table"),(0,i.kt)("p",null,"This section covers what it's like to add a new table, though some information is helpful when editing existing\ntables/models as well."),(0,i.kt)("p",null,"For the examples in this section, we'll be adding a new model called ",(0,i.kt)("inlineCode",{parentName:"p"},"Cat"),", with a corresponding table called ",(0,i.kt)("inlineCode",{parentName:"p"},"cats"),"."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Table Name vs Model Name")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Notice how the model name is singular, while the table name is pluralized. This is a convention of ",(0,i.kt)("inlineCode",{parentName:"p"},"Pop"),", our ORM.\nSee the ",(0,i.kt)("a",{parentName:"p",href:"https://www.gobuffalo.io/en/docs/db/getting-started"},"conventions Pop follows")," for more info."))),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"#creating-migrations"},"Generate a new migration file"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open the generated SQL file and add the logic to create your table.  When creating the SQL you may write the migration like this:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE cats\n(\n    id uuid PRIMARY KEY NOT NULL,\n    created_at timestamp NOT NULL,\n    updated_at timestamp NOT NULL,\n    name text NOT NULL,\n    birthday date,\n    gotcha_day date,\n    bio text,\n    weight int\n);\n\nCOMMENT on TABLE cats IS 'Store cats and their details.';\nCOMMENT on COLUMN cats.name IS 'The official name of a cat...nicknames might need their own table...';\nCOMMENT on COLUMN cats.birthday IS 'Date the cat was born.';\nCOMMENT on COLUMN cats.gotcha_day IS 'Date the cat was adopted. May be same as birthday.';\nCOMMENT on COLUMN cats.bio IS 'Big text field for owners to tell you everything about their cat.';\nCOMMENT on COLUMN cats.weight IS 'Current weight of the cat, or at least what they weighed the last time they let you weigh them.';\n")),(0,i.kt)("p",{parentName:"li"},"Some things to note:"),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"The SQL keywords don't need to be capitalized, but it can be nice to differentiate some of them from certain\nthings like the field names or types."),(0,i.kt)("li",{parentName:"ol"},"We want to add comments for the table itself and every column other than the ",(0,i.kt)("inlineCode",{parentName:"li"},"id"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"created_at"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"updated_at"),"\nfields. This makes it easier for future folks to understand what the columns were meant for."),(0,i.kt)("li",{parentName:"ol"},"You might see some migrations use ",(0,i.kt)("inlineCode",{parentName:"li"},"varchar")," instead of ",(0,i.kt)("inlineCode",{parentName:"li"},"text"),". It's the same thing in the end, see\n",(0,i.kt)("a",{parentName:"li",href:"https://www.postgresqltutorial.com/postgresql-char-varchar-text/"},"Postgresql Character Types")," for more info."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Now you can create a new file in ",(0,i.kt)("inlineCode",{parentName:"p"},"pkg/models/")," named after your new model. So for this, we'll have a new file\n",(0,i.kt)("inlineCode",{parentName:"p"},"pkg/models/cat.go")," that will look something like this:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-go"},'package models\n\nimport (\n    "time"\n\n    "github.com/gofrs/uuid"\n\n    "github.com/transcom/mymove/pkg/unit"\n)\n\n// Cat contains all the information relevant to a cat...\ntype Cat struct {\n    ID         uuid.UUID   `json:"id" db:"id"`\n    CreatedAt  time.Time   `json:"created_at" db:"created_at"`\n    UpdatedAt  time.Time   `json:"updated_at" db:"updated_at"`\n    Name       string      `json:"name" db:"name"`\n    Birthday   *time.Time  `json:"birthday" db:"birthday"`\n    GotchaDay  *time.Time  `json:"gotcha_day" db:"gotcha_day"`\n    Bio        *string     `json:"bio" db:"bio"`\n    Weight     *unit.Pound `json:"weight" db:"weight"`\n}\n\n// Cats is a list of Cats\ntype Cats []Cat\n')),(0,i.kt)("p",{parentName:"li"},"Some things to note:"),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"The field names here are pascal case, while in the struct tags, we use the snake case version. "),(0,i.kt)("li",{parentName:"ol"},"Notice how we used ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," for ",(0,i.kt)("inlineCode",{parentName:"li"},"Name"),", while we used ",(0,i.kt)("inlineCode",{parentName:"li"},"*string")," for ",(0,i.kt)("inlineCode",{parentName:"li"},"Bio"),". We have a loose convention around\nusing pointers for optional (nullable) fields, and the concrete type for required fields.",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"One important thing to note here is that this will affect patch requests if you want the API caller to be\nable to make a request without passing in all the non-nullable fields each time. Some options which we use\nfor existing models:",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Make the field a pointer on the model. This means you will need to have validation somewhere though to\nensure that we save a valid value to the DB in the end."),(0,i.kt)("li",{parentName:"ol"},"Follow a pattern similar to the\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/transcom/mymove/blob/088b87605f19b18b022ff718fcbd5eb8f6962585/pkg/services/ppmshipment/ppm_shipment_updater.go#L44-L49"},"PPM shipment updater"),"\nwhich merges the new and old shipment ",(0,i.kt)("em",{parentName:"li"},"before")," validating the shipment."))))),(0,i.kt)("li",{parentName:"ol"},"We define the plural ",(0,i.kt)("inlineCode",{parentName:"li"},"type")," under the main struct as a slice of the type.",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"You might see some models that don't follow this pattern, but generally we prefer to follow it so if you are\nadding a new table it's best to stick with this pattern."))))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Now you will want to run the migration to test it out with ",(0,i.kt)("inlineCode",{parentName:"p"},"make db_dev_migrate"),"."))),(0,i.kt)("h4",{id:"modeltable-names-with-acronyms"},"Model/Table Names With Acronyms"),(0,i.kt)("p",null,"If your model/table name has an acronym in it, e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"PPMShipment"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"ppm_shipments"),", you will need to define a receiver\nfunction called ",(0,i.kt)("inlineCode",{parentName:"p"},"TableName")," for the model struct that helps ",(0,i.kt)("inlineCode",{parentName:"p"},"Pop")," know what the table name should be. An example is our\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove/blob/9c2a281dbd777b77064c1ae563531a3f0c7bf9d0/pkg/models/ppm_shipment.go#L62-L65"},(0,i.kt)("inlineCode",{parentName:"a"},"PPMShipment")," model's receiver function"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'// TableName overrides the table name used by Pop. By default it tries using the name `ppmshipments`.\nfunc (p PPMShipment) TableName() string {\n    return "ppm_shipments"\n}\n')),(0,i.kt)("p",null,"As the comment indicates, ",(0,i.kt)("inlineCode",{parentName:"p"},"Pop")," resolves the name incorrectly because the acronym in the model name throws it off."),(0,i.kt)("h2",{id:"running-migrations"},"Running Migrations"),(0,i.kt)("p",null,"Migrations are run by the ",(0,i.kt)("inlineCode",{parentName:"p"},"milmove migrate")," command. This allows us to leverage different authentication methods for migrations in development and in production using the same code. To migrate you should use a command based on your DB:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"make db_dev_migrate")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"make db_test_migrate")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"make db_deployed_migrations_migrate"))),(0,i.kt)("p",null,"The reason to use a ",(0,i.kt)("inlineCode",{parentName:"p"},"make")," target is because it will correctly set the migration flag variables and target the correct database with environment variables."),(0,i.kt)("h2",{id:"update-migrations-locally"},"Update Migrations Locally"),(0,i.kt)("p",null,"In the event that you need to make an edit to a migration that you have just created prior to merging it into the main branch,\nyou can update the migration with your edits and rerun it using: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"make db_dev_reset db_dev_migrate\n")),(0,i.kt)("p",null,"This command will reset the database and re-add all migrations, including your updated one. Double check that you see\nthe database changes after making your edits and running the ",(0,i.kt)("inlineCode",{parentName:"p"},"make")," commands. "),(0,i.kt)("h2",{id:"secure-migrations"},"Secure Migrations"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u2757\ufe0f ",(0,i.kt)("strong",{parentName:"p"},"Before adding SSNs or other PII, please consult with Infra."))),(0,i.kt)("p",null,'We are piggy-backing on the migration system for importing static datasets. This approach causes problems if the data isn\'t public, as all of the migrations are in this open source repository. To address this, we have what are called "secure migrations."'),(0,i.kt)("h3",{id:"creating-secure-migrations"},"Creating Secure Migrations"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Set up a local ",(0,i.kt)("inlineCode",{parentName:"p"},"deployed_migrations")," database by running:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"make run_prd_migrations\n")),(0,i.kt)("p",{parentName:"li"},"This will help you test the migration you are creating later.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Generate new migration files with ",(0,i.kt)("inlineCode",{parentName:"p"},"generate-secure-migration <migration_name>"),". This creates two migration files:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"a file in ",(0,i.kt)("inlineCode",{parentName:"li"},"migrations/app/secure")," with no secret data. This one will be used to set up the dev db"),(0,i.kt)("li",{parentName:"ul"},"a file in ",(0,i.kt)("inlineCode",{parentName:"li"},"tmp")," which will be uploaded to S3 and contain sensitive data"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Edit the production migration first, and put whatever sensitive data in it that you need to.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Copy the production migration into the local test migration.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Scrub the test migration of sensitive data, but use it to test the gist of the production migration operation.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Test the local secure migration by running:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"make db_dev_migrate\n")),(0,i.kt)("p",{parentName:"li"},"You should see it run your new secure migration (with non-sensitive data).")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Then verify the secure migration with sensitive data works by running:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"psql-deployed-migrations< tmp/$NAME_OF_YOUR_SECURE_MIGRATION\n")),(0,i.kt)("p",{parentName:"li"},"This will load the sensitive data into the local ",(0,i.kt)("inlineCode",{parentName:"p"},"deployed_migrations")," database."),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"NOTE:")," This is not going to wrap the migration in a transaction. If it fails partway through, you'll need to clean it up or start fresh. If you do want to start fresh, you can:",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Comment out your secure migration in ",(0,i.kt)("inlineCode",{parentName:"li"},"migrations/app/migrations_manifest.txt"),". Add a ",(0,i.kt)("inlineCode",{parentName:"li"},"# ")," in front of it to comment it out."),(0,i.kt)("li",{parentName:"ol"},"Then run:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"make run_prd_migrations\n"))),(0,i.kt)("li",{parentName:"ol"},"Now you can re-run the ",(0,i.kt)("inlineCode",{parentName:"li"},"psql")," line that is posted above."))))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"If you are wanting to run a secure migration for a specific non-production environment, then ",(0,i.kt)("a",{parentName:"p",href:"#Secure-Migrations-for-One-Environment"},(0,i.kt)("strong",{parentName:"a"},"skip to the next section")),". Otherwise,")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Upload the migration to S3 with:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"upload-secure-migration <production_migration_file>\n")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"NOTE:")," For a single environment see ",(0,i.kt)("a",{parentName:"p",href:"#Secure-Migrations-for-One-Environment"},"the next section"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Verify that the upload worked and the migration can be applied successfully by running:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"make run_prd_migrations\n")),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"If not, you can make changes and re-upload. It will overwrite the old files."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Once the migration is working properly, ",(0,i.kt)("strong",{parentName:"p"},"delete the secure migration from your ",(0,i.kt)("inlineCode",{parentName:"strong"},"tmp")," directory")," if you didn't delete it when the upload script prompted you in a previous step.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open a pull request!")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"When the pull request merges, the production migrations will be run on Staging and Prod."))),(0,i.kt)("h3",{id:"secure-migrations-for-one-environment"},"Secure Migrations for One Environment"),(0,i.kt)("p",null,"To run a secure migration on ONLY staging (or other chosen environment), upload the migration only to the S3 environment and blank files to the others. "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Similar to the "Upload the migration" step above, run ',(0,i.kt)("inlineCode",{parentName:"p"},'ENVIRONMENTS="stg" upload-secure-migration <production_migration_file>')," where ",(0,i.kt)("inlineCode",{parentName:"p"},"ENVIRONMENTS")," is a quoted list of all the environments you wish to upload to. The default is ",(0,i.kt)("inlineCode",{parentName:"p"},'"exp stg prd"')," but you can just do staging and production with ",(0,i.kt)("inlineCode",{parentName:"p"},'ENVIRONMENTS="stg prd"'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Check that it is listed in the S3 staging secure-migrations folder. For GovCloud account that would be ",(0,i.kt)("inlineCode",{parentName:"p"},"DISABLE_AWS_VAULT_WRAPPER=1 AWS_PROFILE=transcom-gov-id AWS_REGION=us-gov-west-1 aws-vault exec transcom-gov-milmove-stg -- aws s3 ls s3://transcom-gov-milmove-stg-app-us-gov-west-1/secure-migrations/"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Check that it is NOT listed in the S3 production folder. GovCloud: ",(0,i.kt)("inlineCode",{parentName:"p"},"DISABLE_AWS_VAULT_WRAPPER=1 AWS_PROFILE=transcom-gov-id AWS_REGION=us-gov-west-1 aws-vault exec transcom-gov-milmove-stg -- aws s3 ls s3://transcom-gov-milmove-prd-app-us-gov-west-1/secure-migrations/"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Now upload empty files of the same name to the prd and exp environments: ",(0,i.kt)("inlineCode",{parentName:"p"},'ENVIRONMENTS="exp prd" upload-secure-migration <empty_migration_file_with_same_name>'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"To verify upload and that the migration can be applied use the make target corresponding to your environment:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"make run_prd_migrations")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"make run_stg_migrations")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"make run_exp_migrations"))))),(0,i.kt)("h3",{id:"how-secure-migrations-work"},"How Secure Migrations Work"),(0,i.kt)("p",null,"When migrations are run the ",(0,i.kt)("inlineCode",{parentName:"p"},"$MIGRATION_MANIFEST")," will be checked against files inside the paths listed in\n",(0,i.kt)("inlineCode",{parentName:"p"},"$MIGRATION_PATH")," (a semicolon separated list of local ",(0,i.kt)("inlineCode",{parentName:"p"},"file://")," or AWS S3 ",(0,i.kt)("inlineCode",{parentName:"p"},"s3://")," paths). The migration code\nwill then run each migration listed in the manifest in order of the Version (which is typically a time stamp\nat the front of a file)."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Look at ",(0,i.kt)("inlineCode",{parentName:"li"},"$MIGRATION_MANIFEST")," to determine list of migrations to run (anything not listed will not be run, anything listed but missing will throw an error)"),(0,i.kt)("li",{parentName:"ul"},"Look at ",(0,i.kt)("inlineCode",{parentName:"li"},"$MIGRATION_PATH")," to find files locally or in AWS S3. See the ",(0,i.kt)("inlineCode",{parentName:"li"},"Makefile")," for examples."),(0,i.kt)("li",{parentName:"ul"},"If the file is to be found on S3, it is streamed directly into memory instead of downloading."),(0,i.kt)("li",{parentName:"ul"},"If it is to be found locally, the script looks for it in the listed path.")),(0,i.kt)("p",null,"There is an example of local secure migrations ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove/blob/master/migrations/app/secure"},"in the repo"),"."),(0,i.kt)("h3",{id:"downloading-secure-migrations"},"Downloading Secure Migrations"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"NOTE:")," Be careful with downloading secure migrations. They often contain sensitive input and should be treated with care. When you are done with these secure migrations please delete them from your computer."),(0,i.kt)("p",null,"You may need to download and inspect secure migrations. Or perhaps you need to correct a file you uploaded by mistake. Here is how you download the secure migrations:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Download the migration to S3 with: ",(0,i.kt)("inlineCode",{parentName:"li"},"download-secure-migration <production_migration_file>"),". You can also use the ",(0,i.kt)("inlineCode",{parentName:"li"},"ENVIRONMENTS")," environment variable to specify one or more than one environment (exp, stg, prd)."),(0,i.kt)("li",{parentName:"ul"},"This will put files in ",(0,i.kt)("inlineCode",{parentName:"li"},"./tmp/secure_migrations/${environment}"),".")),(0,i.kt)("p",null,"You can now inspect or modify and re-upload those files as needed. Running the script will look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"download-secure-migration 20200911161101_secure_migration.up.sql\n\nDownloading from: exp\ndownload: s3://transcom-gov-milmove-exp-app-us-gov-west-1/secure-migrations/20200911161101_secure_migration.up.sql to ./tmp/secure_migrations/exp/20200911161101_secure_migration.up.sql\nDownloading from: stg\ndownload: s3://transcom-gov-milmove-stg-app-us-gov-west-1/secure-migrations/20200911161101_secure_migration.up.sql to ./tmp/secure_migrations/stg/20200911161101_secure_migration.up.sql\nDownloading from: prd\n.download: s3://transcom-gov-milmove-prd-app-us-gov-west-1/secure-migrations/20200911161101_secure_migration.up.sql to ./tmp/secure_migrations/prd/20200911161101_secure_migration.up.sql\n\nFiles have been downloaded to these locations:\n\n./tmp/secure_migrations/prd/20200911161101_secure_migration.up.sql\n./tmp/secure_migrations/exp/20200911161101_secure_migration.up.sql\n./tmp/secure_migrations/stg/20200911161101_secure_migration.up.sql\n\nPlease remember to 'rm -rf ./tmp/secure_migrations' when you are finished working\n")),(0,i.kt)("h2",{id:"notes"},"Notes"),(0,i.kt)("h3",{id:"why-we-avoid-uuid_generate_v4"},"Why we avoid ",(0,i.kt)("inlineCode",{parentName:"h3"},"uuid_generate_v4()")),(0,i.kt)("p",null,"We avoid the use of ",(0,i.kt)("inlineCode",{parentName:"p"},"uuid_generate_v4()")," for scripts that add data to the database (especially generating primary keys) because:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"It make running migrations multiple times end up with different results."),(0,i.kt)("li",{parentName:"ul"},"It makes it hard to use primary keys generated this way as foreign keys in other migrations."),(0,i.kt)("li",{parentName:"ul"},"It raises the remote possibility that a migration works in one system and fails in another."),(0,i.kt)("li",{parentName:"ul"},"With specific UUIDs we were able to track down users in each system. When using ",(0,i.kt)("inlineCode",{parentName:"li"},"uuid_generate_v4()"),", we have no way of telling what UUID people were assigned on remote machines so we lose the ability to identify them locally.")),(0,i.kt)("p",null,"For more details see this ",(0,i.kt)("a",{parentName:"p",href:"https://ustcdp3.slack.com/archives/CP6PTUPQF/p1559840327095700"},"slack thread")),(0,i.kt)("h3",{id:"zero-downtime-migrations"},"Zero-Downtime Migrations"),(0,i.kt)("p",null,"As a good practice, all of our migrations should create a database state that works both with the current version of the application code ",(0,i.kt)("em",{parentName:"p"},"and")," the new version of the application code. This allows us to run migrations before the new app code is live without creating downtime for our users. More in-depth list of migrations that might cause issues are outlined in our ",(0,i.kt)("a",{parentName:"p",href:"https://docs.google.com/document/d/1q-Ho5NINRPpsHQI-DjmLrDlzHsBh-hUc"},"google drive"),"."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ankane/strong_migrations"},"strong-migrations")," is another great resource with detailed documentation and an exhaustive list of dangerous operations. The code examples are for Rails, but the same principles apply."),(0,i.kt)("p",null,"Eg: If we need to rename a column, doing a traditional rename would cause the app to fail if the database changes went live before the new application code (pointing to the new column name) went live. Instead, this should be done in [six steps[(",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ankane/strong_migrations#renaming-a-column"},"https://github.com/ankane/strong_migrations#renaming-a-column"),"), where each step gets deployed separately:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create a new column"),(0,i.kt)("li",{parentName:"ol"},"Write to both columns"),(0,i.kt)("li",{parentName:"ol"},"Backfill data from the old column to the new column"),(0,i.kt)("li",{parentName:"ol"},"Move reads from the old column to the new column"),(0,i.kt)("li",{parentName:"ol"},"Stop writing to the old column"),(0,i.kt)("li",{parentName:"ol"},"Drop the old column")),(0,i.kt)("p",null,"Similarly, if a column needs to be dropped, we should deprecate the column in one pull request and then actually remove it in a follow-up pull request. Deprecation can be done by renaming the column to ",(0,i.kt)("inlineCode",{parentName:"p"},"deprecated_column_name"),". This process has an added side affect of helping us keep our migrations reversible, since columns can always be re-added, but getting old data back into those columns is a more difficult process."))}d.isMDXComponent=!0}}]);