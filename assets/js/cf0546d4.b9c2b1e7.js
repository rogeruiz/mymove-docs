"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[2601],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return n?a.createElement(h,s(s({ref:t},c),{},{components:n})):a.createElement(h,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var d=2;d<o;d++)s[d]=n[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9193:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return c},default:function(){return u}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),s=["components"],i={},l="Turning TDL scores and TSP discounts into transportation service provider performances",d={unversionedId:"old-wiki/tspp-data-creation",id:"old-wiki/tspp-data-creation",isDocsHomePage:!1,title:"Turning TDL scores and TSP discounts into transportation service provider performances",description:"This outlines the steps you need to do to join the two data sources we've traditionally gotten - CSVs or text files of best value scores tied to TDLs, exported one code of service at a time, and CSVs or text files of TSP discount rates, organized by the three pieces of data that make up a TDL (origin, destination, and code of service). If anything behaves in a surprising way, double check the schema detailed here against the organization of your input files. No step of this should alter zero rows, for instance.",source:"@site/docs/old-wiki/tspp-data-creation.md",sourceDirName:"old-wiki",slug:"/old-wiki/tspp-data-creation",permalink:"/docs/old-wiki/tspp-data-creation",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/old-wiki/tspp-data-creation.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"How To Troubleshoot GEX Connection",permalink:"/docs/old-wiki/troubleshoot-gex-connection"},next:{title:"How To Unit Test React Components",permalink:"/docs/old-wiki/unit-test-react-components"}},c=[{value:"Verify Input Files",id:"verify-input-files",children:[{value:"TDL Scores",id:"tdl-scores",children:[]},{value:"TSP Rates",id:"tsp-rates",children:[]},{value:"TDL Performance Dates vs TSP Rate Dates",id:"tdl-performance-dates-vs-tsp-rate-dates",children:[]}]},{value:"Load TSP Discount Rates",id:"load-tsp-discount-rates",children:[]},{value:"Load TSP Best Value Scores from TDL data",id:"load-tsp-best-value-scores-from-tdl-data",children:[]},{value:"Combining Scores and Discounts",id:"combining-scores-and-discounts",children:[{value:"Add column to hold TDL IDs",id:"add-column-to-hold-tdl-ids",children:[]},{value:"Add column to hold TSP IDs",id:"add-column-to-hold-tsp-ids",children:[]},{value:"Generate data for production import",id:"generate-data-for-production-import",children:[]},{value:"Export TSPP Data",id:"export-tspp-data",children:[]}]},{value:"Data Validation",id:"data-validation",children:[]},{value:"Temp Data Clean Up",id:"temp-data-clean-up",children:[]},{value:"Create Secure Migrations",id:"create-secure-migrations",children:[{value:"How to create the dummy file",id:"how-to-create-the-dummy-file",children:[]}]}],p={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"turning-tdl-scores-and-tsp-discounts-into-transportation-service-provider-performances"},"Turning TDL scores and TSP discounts into transportation service provider performances"),(0,o.kt)("p",null,"This outlines the steps you need to do to join the two data sources we've traditionally gotten - CSVs or text files of best value scores tied to TDLs, exported one code of service at a time, and CSVs or text files of TSP discount rates, organized by the three pieces of data that make up a TDL (origin, destination, and code of service). If anything behaves in a surprising way, double check the schema detailed here against the organization of your input files. No step of this should alter zero rows, for instance."),(0,o.kt)("p",null,"Before you begin this process, convert discount rate Excel files or txt files to CSVs, if needed. ",(0,o.kt)("strong",{parentName:"p"},"Verify that values for SVY_SCORE, RATE_SCORE, and BVS are decimal values (should be formatted like ",(0,o.kt)("inlineCode",{parentName:"strong"},"77.3456"),").")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"We will use the ",(0,o.kt)("inlineCode",{parentName:"p"},"\\copy")," ",(0,o.kt)("inlineCode",{parentName:"p"},"psql")," command throughout this guide."),(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"\\copy")," is a simpler way of getting this into the db because it requires less in the way of user permissions (unlike the ",(0,o.kt)("inlineCode",{parentName:"p"},"COPY")," command). Use your absolute path for where you stored those CSV files.")),(0,o.kt)("p",null,"Note: If you wish to view existing data from production, use the command ",(0,o.kt)("inlineCode",{parentName:"p"},"bin/run-prod-migrations"),". The local development ",(0,o.kt)("inlineCode",{parentName:"p"},"dev-db"),"\ndoes not contain the full set of data. You should not need to run the command ",(0,o.kt)("inlineCode",{parentName:"p"},"bin/run-prod-migrations")," to complete the steps outlined here."),(0,o.kt)("h2",{id:"verify-input-files"},"Verify Input Files"),(0,o.kt)("p",null,"Check that the files you are about to import have roughly the correct number of lines in them:"),(0,o.kt)("h3",{id:"tdl-scores"},"TDL Scores"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"496592   TDL Scores - 1Aug2018 PP - NP - Code 2.csv\n496592   TDL Scores - 1Aug2018 PP - PK - Code 2.csv\n565673   TDL Scores - 1Aug2018 PP - NP - Code D.csv\n565673   TDL Scores - 1Aug2018 PP - PK - Code D.csv\n")),(0,o.kt)("h3",{id:"tsp-rates"},"TSP Rates"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"496593   2018 Code 2 NonPeak Rates.txt\n496593   2018 Code 2 Peak Rates.txt\n565674   2018 Code D NonPeak Rates.txt\n565674   2018 Code D Peak Rates.txt\n")),(0,o.kt)("h3",{id:"tdl-performance-dates-vs-tsp-rate-dates"},"TDL Performance Dates vs TSP Rate Dates"),(0,o.kt)("p",null,"Note that Rates overlap Performance Periods. You may get a new set of TDLs and will have to use existing (Non)Peak Rates.\nE.g., To load the performance data for ",(0,o.kt)("inlineCode",{parentName:"p"},"Performance Period 1")," 2019 the 2018 ",(0,o.kt)("inlineCode",{parentName:"p"},"* NonPeak Rates.txt")," files were used."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"Rate Cycle:\nPeak: 5/15 to 9/30\n\nPerformance Periods\n1: 1/1   to  5/14\n2: 5/15  to  7/31\n3: 8/1   to  9/30\n4: 10/1  to  12/31\n\n+--------------------------------------------------------------------------------------------+-----------------------------+\n| 2018                                                                                       | 2019                        |\n+--------------------------------------------------------------------------------------------+-----------------------------+\n| Rate Cycle Rate - Non Peak (2017)     | Rate Cycle Rate - Peak (2018)    | Rate Cycle Rate - Non Peak (2018)          |  |\n+---------------------------------------+----------------------------------+--------------------------------------------+--+\n| Perf Period 1                         | Perf Period 2    | Perf Period 3 | Perf Period 4   | Perf Period 1            |  |\n+------------------------------------------+---------------+---------------+-----------------+-----------------------------+\n| Jan    | Feb    | Mar    | Apr    | May  | Jun   | Jul   | Aug   | Sept  | Oct | Nov | Dec | Jan | Feb | Mar | Apr | May |\n+--------+--------+--------+--------+------+-------+-------+-------+-------+-----+-----+-----+-----+-----+-----+-----+-----+\n")),(0,o.kt)("h2",{id:"load-tsp-discount-rates"},"Load TSP Discount Rates"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If this isn't your first time at the data-loading rodeo today:\n",(0,o.kt)("inlineCode",{parentName:"p"},"DROP TABLE IF EXISTS temp_tsp_discount_rates;"))),(0,o.kt)("p",null,"Create a table to hold the incoming data:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-SQL"},"CREATE TABLE temp_tsp_discount_rates (\n  rate_cycle text,\n  origin text,\n  destination text,\n  cos text,\n  scac text,\n  lh_rate numeric(6,2),\n  sit_rate numeric(6,2)\n);\n")),(0,o.kt)("p",null,"The files you need now will include the linehaul and SIT discounts and may have a name like ",(0,o.kt)("inlineCode",{parentName:"p"},"2018 Code 2 Peak Rates.txt"),'. The "rates" part is what you\'re looking for: key columns are LH_RATE and SIT_RATE.'),(0,o.kt)("p",null,"You will need to import ",(0,o.kt)("strong",{parentName:"p"},"two")," files, one for each code of service in the part of the rate cycle that applies to the TDL data you just imported."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If your TDL data is during the peak part of the rate cycle (May 15th - September 30th), import the ",(0,o.kt)("strong",{parentName:"li"},"peak")," rates."),(0,o.kt)("li",{parentName:"ul"},"Otherwise, import the ",(0,o.kt)("strong",{parentName:"li"},"nonpeak")," rates.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"\\copy temp_tsp_discount_rates FROM '/add/filename/for/discount/rates/2018 Code D Peak Rates.csv' WITH CSV HEADER;\n\\copy temp_tsp_discount_rates FROM '/add/filename/for/discount/rates/2018 Code 2 Peak Rates.csv' WITH CSV HEADER;\n")),(0,o.kt)("h2",{id:"load-tsp-best-value-scores-from-tdl-data"},"Load TSP Best Value Scores from TDL data"),(0,o.kt)("p",null,'Now, let\'s get those best value scores. This file will likely have "TDL scores" in the title. Key columns are RANK and BVS.'),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"In case you already made this table...\n",(0,o.kt)("inlineCode",{parentName:"p"},"DROP TABLE IF EXISTS temp_tdl_scores;"))),(0,o.kt)("p",null,"Duplicate the format of TDL scores CSVs:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-SQL"},"CREATE TABLE temp_tdl_scores (\n  market text,\n  origin text,\n  destination text,\n  cos text,\n  quartile int,\n  rank int,\n  scac text,\n  svy_score numeric(8,4),\n  rate_score numeric(8,4),\n  bvs numeric(8,4)\n);\n")),(0,o.kt)("p",null,"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"\\copy")," command in psql again to import the TDL scores. Again, you'll need to import ",(0,o.kt)("strong",{parentName:"p"},"two")," files based on whether the dates you are working with are in the peak or nonpeak season. Use your absolute path for where you stored those CSV files."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"\\copy temp_tdl_scores FROM '/add/filename/for/tdl/scores/TDL Scores - 1Aug2018 PP - PK - Code D.csv' WITH CSV HEADER;\n\\copy temp_tdl_scores FROM '/add/filename/for/tdl/scores/TDL Scores - 1Aug2018 PP - PK - Code 2.csv' WITH CSV HEADER;\n")),(0,o.kt)("h2",{id:"combining-scores-and-discounts"},"Combining Scores and Discounts"),(0,o.kt)("p",null,"Now let's combine the important parts of both data sources into one table, which we'll begin to shape into a full set of TSPP data."),(0,o.kt)("p",null,"The following command will create and populate the table described above with the relevant, overlapping details from the table imported earlier with BVSes and the table with discount rates:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-SQL"},"CREATE TABLE tdl_scores_and_discounts AS\n  SELECT\n    s.market, s.origin, s.destination, s.cos, s.scac, s.bvs, dr.lh_rate, dr.sit_rate FROM temp_tdl_scores AS s\n  LEFT JOIN\n    temp_tsp_discount_rates as dr\n  ON\n    s.origin = dr.origin\n  AND\n    s.destination = dr.destination\n  AND\n    s.cos = dr.cos\n  AND\n    s.scac = dr.scac;\n")),(0,o.kt)("h3",{id:"add-column-to-hold-tdl-ids"},"Add column to hold TDL IDs"),(0,o.kt)("p",null,"Add a TDL ID column to fill with this next update:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE tdl_scores_and_discounts ADD COLUMN tdl_id uuid;\n")),(0,o.kt)("p",null,"Sometimes the data provided to us represents fields (destination, most recently) in different ways. Here's how to alter the destination column to match other data sources (most notably the TDL table) - to change 'REGION 1' to just '1' to make the next step work:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-SQL"},"UPDATE\n  tdl_scores_and_discounts\nSET\n  destination = RIGHT(destination, char_length(destination) - 7);\n")),(0,o.kt)("p",null,"Add TDL IDs to the rows in our interim table:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-SQL"},"UPDATE\n  tdl_scores_and_discounts as tsd\nSET\n  tdl_id = tdl.id\nFROM\n  traffic_distribution_lists as tdl\nWHERE\n  tdl.source_rate_area = tsd.origin\nAND\n  tdl.destination_region = tsd.destination\nAND\n  tdl.code_of_service = tsd.cos;\n")),(0,o.kt)("p",null,"Check for null TDL IDs:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT count(DISTINCT scac) FROM tdl_scores_and_discounts WHERE tdl_id IS NULL;\n")),(0,o.kt)("h4",{id:"if-tdl-id-is-still-null"},"If TDL ID is still null"),(0,o.kt)("p",null,"If count returns anything but 0, you'll need to add new TDL entries.\nCheck for new entries on the\n",(0,o.kt)("a",{parentName:"p",href:"https://move.mil/sites/default/files/2019-01/2019%20Domestic%20Channel%20Control%20List.pdf"},"Domestic Channel Control List"),".\nThey'll be highlighted in red.\nCreate a new temp table for TDLs and add the new entries as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE temp_tdls AS SELECT * FROM traffic_distribution_lists;\n\nALTER TABLE temp_tdls ADD COLUMN import boolean;\n\nINSERT INTO temp_tdls (id, source_rate_area, destination_region, code_of_service, created_at, updated_at, import)\nVALUES\n  (uuid_generate_v4(), 'US4965500', '1', '2', now(), now(), true),\n  (uuid_generate_v4(), 'US4965500', '1', 'D', now(), now(), true),\n  /* ... */\n  (uuid_generate_v4(), 'US4965500', '10', '2', now(), now(), true);\n")),(0,o.kt)("p",null,"This will add the new entries to the temporary TDL table,\nforcing them to adhere to any table constraints\nand generating new UUIDs to be consistent across environments.\nFor info on why having consistent UUIDs is important [","[see this document|create-or-deactivate-users]","]"),(0,o.kt)("p",null,"We'll now [","[create a new migration|migrate-the-database.md#how-to-migrate-the-database]","] with that data (replace your migration filename):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"make bin/milmove\nmilmove gen migration -n add_new_tdls\necho -e \"INSERT INTO traffic_distribution_lists (id, source_rate_area, destination_region, code_of_service, created_at, updated_at) \\nVALUES\\n$(\n./scripts/psql-dev \"\\copy (SELECT id, source_rate_area, destination_region, code_of_service FROM temp_tdls WHERE import = true) TO stdout WITH (FORMAT CSV, FORCE_QUOTE *, QUOTE '''');\" \\\n  | awk '{print \"  (\"$0\", now(), now()),\"}' \\\n  | sed '$ s/.$//');\" \\\n  > migrations/20190410152949_add_new_tdls.up.sql\n")),(0,o.kt)("p",null,"This will copy all rows from the table that were included in the new TDL import\nand create an insert statement for the data.\nYou can also use ",(0,o.kt)("inlineCode",{parentName:"p"},"pg_dump")," to generate this migration,\nhowever replacing the timestamps with ",(0,o.kt)("inlineCode",{parentName:"p"},"now()")," allows the environments\nto have true ",(0,o.kt)("inlineCode",{parentName:"p"},"created_at")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"updated_at")," timestamps.\nNot your locally inserted time."),(0,o.kt)("p",null,"Once this migration is written, run it and rejoin the TDLs as above."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"add-column-to-hold-tsp-ids"},"Add column to hold TSP IDs"),(0,o.kt)("p",null,"Make room for TSP IDs:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE tdl_scores_and_discounts ADD COLUMN tsp_id uuid;\n")),(0,o.kt)("p",null,"Import the TSP IDs:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-SQL"},"UPDATE\n  tdl_scores_and_discounts as tsd\nSET\n  tsp_id = tsp.id\nFROM\n  transportation_service_providers tsp\nWHERE\n  tsd.scac = tsp.standard_carrier_alpha_code;\n")),(0,o.kt)("p",null,"Similar to TDLs,\nthere may be missing TSPs.\nCurrently, we're not using any of this TSP data for production moves,\nbut we have to satisfy the foreign key constraints for the TSPP data."),(0,o.kt)("p",null,"Check for missing TSP IDs:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT count(DISTINCT scac) FROM tdl_scores_and_discounts WHERE tsp_id IS NULL;\n")),(0,o.kt)("h4",{id:"if-tsp-id-is-still-null"},"If TSP ID is still null"),(0,o.kt)("p",null,"Note we use GENERATED_UUID4_VAL here to represent a generated UUID, read [","[this doc|migrate-the-database#a-note-about-uuid_generate_v4]","] for details.\nIf this is not 0, add the TSPs:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE temp_tsps AS SELECT * FROM transportation_service_providers;\n\nALTER TABLE temp_tsps ADD COLUMN import boolean;\n\nINSERT INTO temp_tsps (standard_carrier_alpha_code, id, import)\n  SELECT DISTINCT ON (scac) scac AS standard_carrier_alpha_code, GENERATED_UUID4_VAL AS id, true AS import\n  FROM tdl_scores_and_discounts\n  WHERE tsp_id IS NULL;\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"../database/migrate-the-database.md#how-to-migrate-the-database"},"Generate the migration")," (replacing your migration filename):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"make bin/milmove\nmilmove gen migration -n add_new_scacs\necho -e \"INSERT INTO transportation_service_providers (id, standard_carrier_alpha_code, created_at, updated_at) \\nVALUES\\n$(\n./scripts/psql-dev \"\\copy (SELECT id, standard_carrier_alpha_code FROM temp_tsps WHERE import = true) TO stdout WITH (FORMAT CSV, FORCE_QUOTE *, QUOTE '''');\" \\\n  | awk '{print \"  (\"$0\", now(), now()),\"}' \\\n  | sed '$ s/.$//');\" \\\n  > migrations/20190409010258_add_new_scacs.up.sql\n")),(0,o.kt)("p",null,"Run this migration and rejoin the TSP IDs as above."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"generate-data-for-production-import"},"Generate data for production import"),(0,o.kt)("p",null,"Now we're ready to combine the datasets together into one table. First, be sure to clear out the ",(0,o.kt)("inlineCode",{parentName:"p"},"transportation_service_provider_performances")," table in case it already contains data:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"DELETE FROM transportation_service_provider_performances;\n")),(0,o.kt)("p",null,"The following command will fill the TSPP table with data. Use your data's current rate cycle and performance period date in lieu of the hard-coded dates below."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"Rate cycle")," in this context means the rate cycle ",(0,o.kt)("strong",{parentName:"p"},"period"),", so either the peak or non-peak part of the annual rate cycle and ",(0,o.kt)("strong",{parentName:"p"},"not")," the rate cycle itself."),(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://docs.google.com/document/d/12AN1igDt9Acxm9cu1cJA0fiWQIMI3XGs5u_jhCHLo6I"},"This document")," specifies the date ranges for both the performance periods and the rate cycle periods.")),(0,o.kt)("p",null,"Note we use GENERATED_UUID4_VAL here to represent a generated UUID, read [","[this doc|migrate-the-database#a-note-about-uuid_generate_v4]","] for details."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-SQL"},"INSERT INTO\n  transportation_service_provider_performances (id, performance_period_start, performance_period_end, traffic_distribution_list_id, offer_count, best_value_score, transportation_service_provider_id, created_at, updated_at, rate_cycle_start, rate_cycle_end, linehaul_rate, sit_rate)\nSELECT\n  GENERATED_UUID4_VAL as id, '2018-08-01' as performance_period_start, '2018-09-30' as performance_period_end, tdl_id, 0 as offer_count, bvs, tsp_id, now() as created_at, now() as updated_at, '2018-05-15' as rate_cycle_start, '2018-09-30' as rate_cycle_end, lh_rate/100, sit_rate/100\nFROM\n  tdl_scores_and_discounts;\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"/100")," of the ",(0,o.kt)("inlineCode",{parentName:"p"},"sit_rate")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"linehaul_rate")," columns accounts for the differences in representing percentages/decimals across sources. This changes integers into decimal representations that fit into our calculations of rates and reimbursements."),(0,o.kt)("h3",{id:"export-tspp-data"},"Export TSPP Data"),(0,o.kt)("p",null,"Run this in your terminal to dump the contents of the ",(0,o.kt)("inlineCode",{parentName:"p"},"transportation_service_provider_performances")," table for use elsewhere. Double-check your local db name before assuming this will work."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"pg_dump -h localhost -U postgres -W dev_db --table transportation_service_provider_performances --data-only > tspp_data_dump.pgsql")),(0,o.kt)("p",null,"Et voil\xe0: TSPPs!"),(0,o.kt)("p",null,"Note that the above ",(0,o.kt)("inlineCode",{parentName:"p"},"pg_dump")," command will generate a file that uses a single ",(0,o.kt)("inlineCode",{parentName:"p"},"COPY ... FROM stdin")," to load data\nas opposed to a series of ",(0,o.kt)("inlineCode",{parentName:"p"},"INSERT")," statements.  Using ",(0,o.kt)("inlineCode",{parentName:"p"},"COPY")," can be dramatically faster than ",(0,o.kt)("inlineCode",{parentName:"p"},"INSERT")," -- around 100 times\nfaster in some cases.  We generally ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove/pull/2670/files#r322981353"},"prefer ",(0,o.kt)("inlineCode",{parentName:"a"},"INSERT")),"\nbut the amount of data being loaded may make using it simply too expensive for a migration."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"WARNING:")," If the generated file is larger than 250 MB then you will not be able to upload the file. This size limit is in place so that the anti-virus software can scan the file. In the case where a file has been generated that is larger than this size you'll need to split the migration file into multiple migration files each with a size smaller than 250 MB."),(0,o.kt)("h2",{id:"data-validation"},"Data Validation"),(0,o.kt)("p",null,"The following SQL statements can be used to verify that the above process has been completed successfully. Some numbers may be slightly off\ndue to natural changes in the data, but any large discrepancies are a potential signal that something has gone wrong somewhere along the way."),(0,o.kt)("p",null,"NOTE: As of the updates for 2019-10-01 we only import the BVSes for the top performer, instead of everyone. This could lead to more variation in the numbers than in past updates. The numbers below have been updated to reflect the reduced imports."),(0,o.kt)("p",null,"NOTE 2: The first results below are what is expected after running the above import process. The subsequent results are from running the same verification queries after running all the migrations."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"/* returns total count of performances during import process this matches rows in csv */\ndev_db=# SELECT COUNT(id) FROM transportation_service_provider_performances;\n-- import process result\n  count\n---------\n 847\n(1 row)\n\n-- result after running all migrations\n  count\n---------\n 19239\n(1 row)\n\n-- result after running all prod migrations\n  count\n---------\n 5989085\n(1 row)\n\n/* returns the lowest score and highest score */\ndev_db=# select min(best_value_score), max(best_value_score) from transportation_service_provider_performances;\n-- import process result\n   min   |  max\n---------+--------\n  91.0   | 100.0\n(1 row)\n\n-- result after running all migrations\n   min   |  max\n---------+--------\n  50.0   | 100.0\n(1 row)\n\n/* returns the lowest score and highest sit rate */\ndev_db=# select min(sit_rate), max(sit_rate) from transportation_service_provider_performances;\n  min | max\n------+------\n 0.45 | 0.63\n(1 row)\n\n/* returns the lowest score and highest linehaul rate */\ndev_db=# select min(linehaul_rate), max(linehaul_rate) from transportation_service_provider_performances;\n min | max\n-----+------\n 0.4 | 0.68\n(1 row)\n\n/* returns the minimum and maximum number of areas a single tsp has won, so below means at min a tsp has 1, and at most a tsp has 511 */\ndev_db=# SELECT min(count), max(count) FROM (\n    SELECT transportation_service_provider_id, COUNT(id) FROM transportation_service_provider_performances\n    GROUP BY transportation_service_provider_id\n    ) as tspp;\n-- import process result\n min | max\n-----+------\n   1 | 511\n(1 row)\n\n-- result after running all migrations\n min | max\n-----+------\n   1 | 2838\n(1 row)\n\n-- result after running all prod migrations\n min | max\n-----+------\n   2 | 8968\n(1 row)\n\n/* returns the total number of TSPs */\ndev_db=# SELECT count(DISTINCT transportation_service_provider_id) FROM transportation_service_provider_performances;\n-- import process result\n count\n-------\n   35\n(1 row)\n\n-- result after running all migrations\n count\n-------\n  907\n(1 row)\n\n-- result after running all prod migrations\n count\n-------\n  910\n(1 row)\n\nSELECT CONCAT(((bucket -1) * 100)::text, '-', (bucket * 100)::text) as rows, count(transportation_service_provider_id) as tsps FROM (\n    SELECT transportation_service_provider_id, width_bucket(COUNT(id), 0, 2000, 20) as bucket FROM transportation_service_provider_performances\n    GROUP BY transportation_service_provider_id\n    ) as tspp\n   GROUP BY bucket;\n\n-- import process result\n   rows    | tsps\n-----------+-------\n 0-100     |   33\n 200-300   |    1\n 500-600   |    1\n(3 rows)\n\n-- result after running all migrations\n   rows    | tsps\n-----------+-------\n 0-100     |  898\n 100-200   |    3\n 200-300   |    1\n 400-500   |    1\n 300-400   |    1\n 500-600   |    1\n 1700-1800 |    1\n 2000-2100 |    1\n(8 rows)\n\n-- result after running all prod migrations\n   rows    | tsps\n-----------+-------\n 0-100     |   53\n 100-200   |    9\n 200-300   |   33\n 300-400   |   38\n 400-500   |    8\n 500-600   |    7\n 600-700   |    3\n 700-800   |    3\n 800-900   |    2\n 1100-1200 |    1\n 1400-1500 |    1\n 1500-1600 |    2\n 2000-2100 |  750\n(13 rows)\n\n-- Spot check the data by picking a row from the TDL and TSP text/CSV files and verifying the data:\n\nSELECT source_rate_area, destination_region, code_of_service, performance_period_start, performance_period_end,\n       best_value_score, rate_cycle_start, rate_cycle_end, linehaul_rate, sit_rate, standard_carrier_alpha_code,\n       tdl.created_at\nFROM traffic_distribution_lists AS tdl\nLEFT JOIN transportation_service_provider_performances on tdl.id = transportation_service_provider_performances.traffic_distribution_list_id\nLEFT JOIN transportation_service_providers on transportation_service_provider_performances.transportation_service_provider_id = transportation_service_providers.id\nWHERE performance_period_start='2019-10-01' and performance_period_end='2019-12-31'\n  AND destination_region='1' AND source_rate_area='US11'\n  AND code_of_service='D';\n\n")),(0,o.kt)("h2",{id:"temp-data-clean-up"},"Temp Data Clean Up"),(0,o.kt)("p",null,"Vacuum up now that the party's over. Only required if you haven't reset the local database already."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-SQL"},"DROP TABLE tdl_scores_and_discounts;\nDROP TABLE temp_tdl_scores;\nDROP TABLE temp_tsp_discount_rates;\n")),(0,o.kt)("h2",{id:"create-secure-migrations"},"Create Secure Migrations"),(0,o.kt)("p",null,"You will have to create a secure migration for this data import. Two files will need to be created,\nthe file that contains the real data and a local secure migration (dummy file for dev). Follow the\n[","[secure migration steps|migrate-the-database#secure-migrations]","]."),(0,o.kt)("h3",{id:"how-to-create-the-dummy-file"},"How to create the dummy file"),(0,o.kt)("p",null,"You will need to scrub the data that is in the dummy file. The fields: ",(0,o.kt)("inlineCode",{parentName:"p"},"linehaul_rate"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"sit_rate"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"best_value_score"),"\nare company competition sensitive data and needs to scrubbed."),(0,o.kt)("p",null,"The file will also need to be reduced. Currently, we are picking 2 TSPs per TDL."),(0,o.kt)("p",null,"We have a ",(0,o.kt)("a",{parentName:"p",href:"../../scripts/export-obfuscated-tspp-sample"},"script")," to help with this process. The script will backup the TSPP table, make the appropriate reduction of\ndata and scrubbing of key columns, output the results, then restore the original TSPP table.  You can run it like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"./scripts/export-obfuscated-tspp-sample <filename>\n")),(0,o.kt)("p",null,"Complete the [","[secure migration steps|migrate-the-database#secure-migrations]","] to\nsubmit both migration files."))}u.isMDXComponent=!0}}]);