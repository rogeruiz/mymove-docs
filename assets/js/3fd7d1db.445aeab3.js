"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[4487],{3905:function(e,t,o){o.d(t,{Zo:function(){return d},kt:function(){return c}});var n=o(7294);function s(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){s(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function r(e,t){if(null==e)return{};var o,n,s=function(e,t){if(null==e)return{};var o,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(s[o]=e[o]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(s[o]=e[o])}return s}var l=n.createContext({}),m=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),u=m(o),c=s,h=u["".concat(l,".").concat(c)]||u[c]||p[c]||a;return o?n.createElement(h,i(i({ref:t},d),{},{components:o})):n.createElement(h,i({ref:t},d))}));function c(e,t){var o=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=o.length,i=new Array(a);i[0]=u;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:s,i[1]=r;for(var m=2;m<a;m++)i[m]=o[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},6355:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return r},contentTitle:function(){return l},metadata:function(){return m},toc:function(){return d},default:function(){return u}});var n=o(7462),s=o(3366),a=(o(7294),o(3905)),i=["components"],r={},l="Performance Testing `fetchMTOUpdates` Query",m={unversionedId:"vault/confluence/Performance-Testing-fetchMTOUpdates",id:"vault/confluence/Performance-Testing-fetchMTOUpdates",isDocsHomePage:!1,title:"Performance Testing `fetchMTOUpdates` Query",description:"Overview",source:"@site/docs/vault/confluence/Performance-Testing-fetchMTOUpdates.md",sourceDirName:"vault/confluence",slug:"/vault/confluence/Performance-Testing-fetchMTOUpdates",permalink:"/mymove-docs/docs/vault/confluence/Performance-Testing-fetchMTOUpdates",editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/vault/confluence/Performance-Testing-fetchMTOUpdates.md",tags:[],version:"current",frontMatter:{},sidebar:"vaultSidebar",previous:{title:"Principles of Load Testing",permalink:"/mymove-docs/docs/vault/confluence/Load-Testing"},next:{title:"Setting-up-Internet-Explorer-11---Edge-Browser-in-Virtualbox",permalink:"/mymove-docs/docs/vault/confluence/Setting-up-Internet-Explorer-11---Edge-Browser-in-Virtualbox"}},d=[{value:"Overview",id:"overview",children:[{value:"Notes on the test",id:"notes-on-the-test",children:[]},{value:"How to read the results",id:"how-to-read-the-results",children:[]}]},{value:"Tests",id:"tests",children:[{value:"Option 1: Max Greatest",id:"option-1-max-greatest",children:[]},{value:"Option 2: Mad Joins",id:"option-2-mad-joins",children:[]},{value:"Option 3: Flattening",id:"option-3-flattening",children:[]},{value:"Option 4: Unions",id:"option-4-unions",children:[]}]},{value:"Simplified Results",id:"simplified-results",children:[]},{value:"Winner",id:"winner",children:[]},{value:"Conclusion",id:"conclusion",children:[]},{value:"Implementation",id:"implementation",children:[]}],p={toc:d};function u(e){var t=e.components,o=(0,s.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"performance-testing-fetchmtoupdates-query"},"Performance Testing ",(0,a.kt)("inlineCode",{parentName:"h1"},"fetchMTOUpdates")," Query"),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"fetchMTOUpdates")," endpoint in the Prime API is currently the main way for the Prime to retrieve information about moves the TOO has approved and sent to them, besides the push notification functionality. If push were to ever fail, this is their only way to rectify the situation."),(0,a.kt)("p",null,"This leaves us in a conundrum because this query is extremely inefficient. We are using Pop's EagerPreload functionality to retrieve all nested info on the move and its orders, the shipments, the addresses, and so on. For the many thousands of moves we expect in peak season, this will not work. "),(0,a.kt)("p",null,"We also want to give the Prime the ability to filter this list based off the last updated date of the move ",(0,a.kt)("em",{parentName:"p"},"and")," it's nested objects - shipments, service items, etc. This is a complex problem, and it is the main issue we are trying to address by rewriting this query. "),(0,a.kt)("p",null,"We have completed the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.google.com/document/d/1ggQrF7Cxq9Tfnzzv3WQeuJuJ7uB0txD0JYg69LwEK0k/edit#heading=h.d5b2vwy78o8j"},(0,a.kt)("inlineCode",{parentName:"a"},"fetchMTOUpdates")," Risk Assessment ")," to plan out our remediation of this endpoint. The steps are, briefly:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Performance test the options for a ",(0,a.kt)("inlineCode",{parentName:"li"},"fetchMTOUpdates")," query and implement the most performant."),(0,a.kt)("li",{parentName:"ol"},"Give the Prime other ways to retrieve move data.")),(0,a.kt)("p",null,"This analysis aims to complete Step 1 of this process. Most of these query options were pulled from ",(0,a.kt)("a",{parentName:"p",href:"https://trussworks.slack.com/archives/CDJ9JAD26/p1616628329057000"},"this slack thread"),", with the necessary modifications to make this query fit our requirements."),(0,a.kt)("h3",{id:"notes-on-the-test"},"Notes on the test"),(0,a.kt)("p",null,"All query options below were run against a dataset with 91 total move records, 24 of which were available to Prime (",(0,a.kt)("inlineCode",{parentName:"p"},"available_to_prime_at != null"),")."),(0,a.kt)("p",null,"We have the following requirements on the query:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The Prime should get move data back. "),(0,a.kt)("li",{parentName:"ol"},"No moves that are disabled or deleted should be returned. So ",(0,a.kt)("inlineCode",{parentName:"li"},"show = TRUE")," is a requirement."),(0,a.kt)("li",{parentName:"ol"},"Only moves that are available to Prime should be returned."),(0,a.kt)("li",{parentName:"ol"},"The query should allow a ",(0,a.kt)("inlineCode",{parentName:"li"},"since")," parameter to be passed in that allows the Prime to see the moves that have been updated or have had nested objects updated since that date.")),(0,a.kt)("p",null,"In an effort to give integrity to the tests, I tried to make each query fit these requirements as possible. However, there are some notable exceptions where the nature of the query made it difficult to create an equal playing field. "),(0,a.kt)("p",null,"Most notably, Option 3 returns a significantly different dataset than the others. Option 1 also limits which columns can be in the SELECT statement due to the grouping. These issues will be further addressed with each test."),(0,a.kt)("p",null,"Furthermore, you might notice the absence of addresses in these queries. I will address that in the ",(0,a.kt)("a",{parentName:"p",href:"#conclusion"},"conclusion"),"."),(0,a.kt)("h3",{id:"how-to-read-the-results"},"How to read the results"),(0,a.kt)("p",null,"I use PSQL's EXPLAIN ANALYZE command to get the test results. This gives me:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Postgres' expected computation cost for each step of the query. This is an imaginary unit that roughly translates to how much time they expect the query to take."),(0,a.kt)("li",{parentName:"ul"},"The actual time the query took to execute. ")),(0,a.kt)("p",null,"I will be giving most credence to the actual time spent on the query. But the potential CPU cost is important - the limits of our dataset can make a query seem faster than it will be in a production setting. I try to keep that in mind as well."),(0,a.kt)("p",null,"Note that UNIONS also seem to be quantifiably more efficient than JOINS: ",(0,a.kt)("a",{parentName:"p",href:"https://www.foxhound.systems/blog/sql-performance-with-union/"},"Speeding up SQL queries by orders of magnitude using UNION")),(0,a.kt)("h2",{id:"tests"},"Tests"),(0,a.kt)("h3",{id:"option-1-max-greatest"},"Option 1: Max Greatest"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT moves.*  \nFROM moves  \n  LEFT JOIN orders ON moves.orders_id = orders.id  \n  LEFT JOIN mto_shipments ON moves.id = mto_shipments.move_id  \n  LEFT JOIN mto_service_items ON mto_service_items.move_id = moves.id  \n  LEFT JOIN payment_requests ON payment_requests.move_id = moves.id  \nWHERE moves.available_to_prime_at IS NOT NULL  \n  AND moves.show = TRUE  \nGROUP BY 1  \nHAVING MAX(GREATEST(moves.updated_at,  \n                    orders.updated_at,  \n                    mto_shipments.updated_at,  \n                    mto_service_items.updated_at,  \n                    payment_requests.updated_at)) >= '2021/07/16';\n")),(0,a.kt)("p",null,"This query joins the tables we need to check in our ",(0,a.kt)("inlineCode",{parentName:"p"},"since")," parameter and then groups the results so that the MAX ",(0,a.kt)("inlineCode",{parentName:"p"},"updated_at")," date can be aggregated. It is easy to read, relatively easy to filter, but we cannot grab extra columns from the JOINS because of that grouping."),(0,a.kt)("p",null,"EXPLAIN ANALYZE results:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"HashAggregate  (cost=33.83..34.00 rows=5 width=143) (actual time=35.382..35.789 rows=2 loops=1)\n  Group Key: moves.id\n\"  Filter: (max(GREATEST((moves.updated_at)::timestamp with time zone, (orders.updated_at)::timestamp with time zone, mto_shipments.updated_at, mto_service_items.updated_at, (payment_requests.updated_at)::timestamp with time zone)) >= '2021-07-16 00:00:00+00'::timestamp with time zone)\"\n  Rows Removed by Filter: 22\n  ->  Hash Right Join  (cost=20.48..32.81 rows=68 width=175) (actual time=27.970..31.985 rows=209 loops=1)\n        Hash Cond: (payment_requests.move_id = moves.id)\n        ->  Seq Scan on payment_requests  (cost=0.00..11.20 rows=120 width=24) (actual time=0.114..0.653 rows=25 loops=1)\n        ->  Hash  (cost=20.00..20.00 rows=38 width=167) (actual time=27.779..28.065 rows=185 loops=1)\n              Buckets: 1024  Batches: 1  Memory Usage: 44kB\n              ->  Hash Right Join  (cost=14.98..20.00 rows=38 width=167) (actual time=16.767..22.930 rows=185 loops=1)\n                    Hash Cond: (mto_shipments.move_id = moves.id)\n                    ->  Seq Scan on mto_shipments  (cost=0.00..4.14 rows=114 width=24) (actual time=0.041..1.531 rows=102 loops=1)\n                    ->  Hash  (cost=14.71..14.71 rows=22 width=159) (actual time=15.770..15.973 rows=102 loops=1)\n                          Buckets: 1024  Batches: 1  Memory Usage: 27kB\n                          ->  Hash Right Join  (cost=7.49..14.71 rows=22 width=159) (actual time=11.020..14.393 rows=102 loops=1)\n                                Hash Cond: (orders.id = moves.orders_id)\n                                ->  Seq Scan on orders  (cost=0.00..6.33 rows=133 width=24) (actual time=0.030..1.729 rows=113 loops=1)\n                                ->  Hash  (cost=7.22..7.22 rows=22 width=151) (actual time=9.642..9.737 rows=102 loops=1)\n                                      Buckets: 1024  Batches: 1  Memory Usage: 26kB\n                                      ->  Hash Right Join  (cost=2.84..7.22 rows=22 width=151) (actual time=1.047..7.605 rows=102 loops=1)\n                                            Hash Cond: (mto_service_items.move_id = moves.id)\n                                            ->  Seq Scan on mto_service_items  (cost=0.00..4.07 rows=107 width=24) (actual time=0.029..2.377 rows=108 loops=1)\n                                            ->  Hash  (cost=2.67..2.67 rows=14 width=143) (actual time=0.824..0.856 rows=24 loops=1)\n                                                  Buckets: 1024  Batches: 1  Memory Usage: 12kB\n                                                  ->  Seq Scan on moves  (cost=0.00..2.67 rows=14 width=143) (actual time=0.053..0.374 rows=24 loops=1)\n                                                        Filter: ((available_to_prime_at IS NOT NULL) AND show)\n                                                        Rows Removed by Filter: 67\nPlanning Time: 1.038 ms\nExecution Time: 37.581 ms\n")),(0,a.kt)("h3",{id:"option-2-mad-joins"},"Option 2: Mad Joins"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT moves.*  \nFROM moves  \n  LEFT JOIN orders ON moves.orders_id = orders.id  \n  LEFT JOIN mto_shipments ON moves.id = mto_shipments.move_id  \n  LEFT JOIN mto_service_items ON mto_service_items.move_id = moves.id  \n  LEFT JOIN payment_requests ON payment_requests.move_id = moves.id  \nWHERE moves.available_to_prime_at IS NOT NULL  \n  AND moves.show = TRUE  \n  AND (moves.updated_at >= '2021/07/16' OR  \n       orders.updated_at >= '2021/07/16' OR  \n       mto_shipments.updated_at >= '2021/07/16' OR  \n       mto_service_items.updated_at >= '2021/07/16' OR  \n       payment_requests.updated_at >= '2021/07/16')  \nGROUP BY 1;\n")),(0,a.kt)("p",null,"This query is extremely similar to the first, with the main difference being the compound OR statement instead of the GREATEST aggregate function."),(0,a.kt)("p",null,"EXPLAIN ANALYZE results:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"HashAggregate  (cost=33.34..33.48 rows=14 width=143) (actual time=25.897..26.724 rows=2 loops=1)\n  Group Key: moves.id\n  ->  Hash Right Join  (cost=20.48..33.28 rows=23 width=143) (actual time=24.569..26.278 rows=3 loops=1)\n        Hash Cond: (payment_requests.move_id = moves.id)\n        Filter: ((moves.updated_at >= '2021-07-16 00:00:00'::timestamp without time zone) OR (orders.updated_at >= '2021-07-16 00:00:00'::timestamp without time zone) OR (mto_shipments.updated_at >= '2021-07-16 00:00:00+00'::timestamp with time zone) OR (mto_service_items.updated_at >= '2021-07-16 00:00:00+00'::timestamp with time zone) OR (payment_requests.updated_at >= '2021-07-16 00:00:00'::timestamp without time zone))\n        Rows Removed by Filter: 206\n        ->  Seq Scan on payment_requests  (cost=0.00..11.20 rows=120 width=24) (actual time=0.040..0.432 rows=25 loops=1)\n        ->  Hash  (cost=20.00..20.00 rows=38 width=167) (actual time=24.479..24.936 rows=185 loops=1)\n              Buckets: 1024  Batches: 1  Memory Usage: 44kB\n              ->  Hash Right Join  (cost=14.98..20.00 rows=38 width=167) (actual time=17.456..22.166 rows=185 loops=1)\n                    Hash Cond: (mto_shipments.move_id = moves.id)\n                    ->  Seq Scan on mto_shipments  (cost=0.00..4.14 rows=114 width=24) (actual time=0.026..1.373 rows=102 loops=1)\n                    ->  Hash  (cost=14.71..14.71 rows=22 width=159) (actual time=16.364..16.589 rows=102 loops=1)\n                          Buckets: 1024  Batches: 1  Memory Usage: 27kB\n                          ->  Hash Right Join  (cost=7.49..14.71 rows=22 width=159) (actual time=8.800..14.358 rows=102 loops=1)\n                                Hash Cond: (orders.id = moves.orders_id)\n                                ->  Seq Scan on orders  (cost=0.00..6.33 rows=133 width=24) (actual time=0.026..1.943 rows=113 loops=1)\n                                ->  Hash  (cost=7.22..7.22 rows=22 width=151) (actual time=7.921..8.059 rows=102 loops=1)\n                                      Buckets: 1024  Batches: 1  Memory Usage: 26kB\n                                      ->  Hash Right Join  (cost=2.84..7.22 rows=22 width=151) (actual time=1.478..6.331 rows=102 loops=1)\n                                            Hash Cond: (mto_service_items.move_id = moves.id)\n                                            ->  Seq Scan on mto_service_items  (cost=0.00..4.07 rows=107 width=24) (actual time=0.082..1.728 rows=108 loops=1)\n                                            ->  Hash  (cost=2.67..2.67 rows=14 width=143) (actual time=1.323..1.377 rows=24 loops=1)\n                                                  Buckets: 1024  Batches: 1  Memory Usage: 12kB\n                                                  ->  Seq Scan on moves  (cost=0.00..2.67 rows=14 width=143) (actual time=0.030..0.488 rows=24 loops=1)\n                                                        Filter: ((available_to_prime_at IS NOT NULL) AND show)\n                                                        Rows Removed by Filter: 67\nPlanning Time: 0.630 ms\nExecution Time: 27.110 ms\n")),(0,a.kt)("h3",{id:"option-3-flattening"},"Option 3: Flattening"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"WITH orders_flat AS (  \n SELECT id AS orders_id,  \n        NULL AS item_id,  \n        updated_at,  \n        'ORDER' AS type_name  \n FROM orders  \n UNION ALL  \n SELECT o1.id,  \n        sm.id,  \n        sm.updated_at,  \n        'CUSTOMER' AS type_name  \n FROM orders o1  \n   INNER JOIN service_members sm ON o1.service_member_id = sm.id)  \nSELECT move_id,  \n      id,  \n      updated_at,  \n      'SI' AS type_name  \nFROM mto_service_items  \nUNION ALL  \nSELECT id,  \n      NULL,  \n      updated_at,  \n      'MOVE' AS type_name  \nFROM moves  \nUNION ALL  \nSELECT move_id,  \n      id,  \n      updated_at,  \n      'SHIPMENT' AS type_name  \nFROM mto_shipments  \nUNION ALL  \nSELECT move_id,  \n      id,  \n      updated_at,  \n      'PAYMENTREQ' AS type_name  \nFROM payment_requests pr  \nUNION ALL  \nSELECT moves.id AS move_id,  \n      moves.orders_id AS id,  \n      MAX(orders_flat.updated_at) AS updated_at,  \n      'ORDER' AS type_name  \nFROM moves  \n JOIN orders_flat ON moves.orders_id = orders_flat.orders_id  \nWHERE moves.available_to_prime_at IS NOT NULL  \n AND moves.show = TRUE\n AND (moves.updated_at >= '2021/07/16' OR  \n      orders_flat.updated_at >= '2021/07/16')\nGROUP BY moves.id;\n")),(0,a.kt)("p",null,"This query takes a markedly different approach from the others. It flattens the full dataset into a table of IDs and a column for the name of the object the IDs belong to. This results of this query would therefore need to be massaged into a form that groups objects based on the move they belong to, which may be disadvantageous. This query would likely need to be run into something akin to a MATERIALIZED VIEW to handle the output. "),(0,a.kt)("p",null,"Note that it does, however, give a more complete image of all the objects involved in the ",(0,a.kt)("inlineCode",{parentName:"p"},"since")," check, which is missing from all other options. It also grabs the service member info, which I have left off of other queries. I discuss what info should be pulled out of the queries more in the conclusion."),(0,a.kt)("p",null,"EXPLAIN ANALYZE results:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Append  (cost=0.00..55.35 rows=414 width=72) (actual time=0.145..42.856 rows=327 loops=1)\n  ->  Seq Scan on mto_service_items  (cost=0.00..4.07 rows=107 width=72) (actual time=0.122..1.919 rows=108 loops=1)\n"  ->  Subquery Scan on ""*SELECT* 2""  (cost=0.00..3.51 rows=67 width=72) (actual time=0.048..4.766 rows=91 loops=1)"\n        ->  Seq Scan on moves  (cost=0.00..2.67 rows=67 width=72) (actual time=0.025..1.940 rows=91 loops=1)\n  ->  Seq Scan on mto_shipments  (cost=0.00..4.14 rows=114 width=72) (actual time=0.041..1.983 rows=102 loops=1)\n"  ->  Subquery Scan on ""*SELECT* 4""  (cost=0.00..12.70 rows=120 width=72) (actual time=0.049..0.864 rows=25 loops=1)"\n        ->  Seq Scan on payment_requests pr  (cost=0.00..11.20 rows=120 width=72) (actual time=0.028..0.270 rows=25 loops=1)\n"  ->  Subquery Scan on ""*SELECT* 5""  (cost=26.47..26.65 rows=6 width=72) (actual time=23.995..24.474 rows=1 loops=1)"\n        ->  GroupAggregate  (cost=26.47..26.58 rows=6 width=72) (actual time=23.948..24.379 rows=1 loops=1)\n              Group Key: moves_1.id\n              ->  Sort  (cost=26.47..26.49 rows=6 width=40) (actual time=23.765..24.218 rows=2 loops=1)\n                    Sort Key: moves_1.id\n                    Sort Method: quicksort  Memory: 25kB\n                    ->  Hash Join  (cost=2.84..26.40 rows=6 width=40) (actual time=2.783..23.987 rows=2 loops=1)\n                          Hash Cond: (orders.id = moves_1.orders_id)\n                          Join Filter: ((moves_1.updated_at >= \'2021-07-16 00:00:00\'::timestamp without time zone) OR (orders.updated_at >= \'2021-07-16 00:00:00\'::timestamp without time zone))\n                          Rows Removed by Join Filter: 46\n                          ->  Append  (cost=0.00..22.27 rows=266 width=24) (actual time=0.046..20.424 rows=226 loops=1)\n                                ->  Seq Scan on orders  (cost=0.00..6.33 rows=133 width=24) (actual time=0.028..1.801 rows=113 loops=1)\n"                                ->  Subquery Scan on ""*SELECT* 2_1""  (cost=6.59..14.61 rows=133 width=24) (actual time=4.801..13.246 rows=113 loops=1)"\n                                      ->  Hash Join  (cost=6.59..13.28 rows=133 width=72) (actual time=4.770..9.817 rows=113 loops=1)\n                                            Hash Cond: (o1.service_member_id = sm.id)\n                                            ->  Seq Scan on orders o1  (cost=0.00..6.33 rows=133 width=32) (actual time=0.086..1.771 rows=113 loops=1)\n                                            ->  Hash  (cost=5.15..5.15 rows=115 width=24) (actual time=4.370..4.404 rows=115 loops=1)\n                                                  Buckets: 1024  Batches: 1  Memory Usage: 15kB\n                                                  ->  Seq Scan on service_members sm  (cost=0.00..5.15 rows=115 width=24) (actual time=0.085..2.318 rows=115 loops=1)\n                          ->  Hash  (cost=2.67..2.67 rows=14 width=40) (actual time=0.644..0.688 rows=24 loops=1)\n                                Buckets: 1024  Batches: 1  Memory Usage: 10kB\n                                ->  Seq Scan on moves moves_1  (cost=0.00..2.67 rows=14 width=40) (actual time=0.036..0.309 rows=24 loops=1)\n                                      Filter: ((available_to_prime_at IS NOT NULL) AND show)\n                                      Rows Removed by Filter: 67\nPlanning Time: 0.699 ms\nExecution Time: 47.929 ms\n')),(0,a.kt)("h3",{id:"option-4-unions"},"Option 4: Unions"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT moves.*  \nFROM moves  \nWHERE moves.available_to_prime_at IS NOT NULL  \n  AND moves.show = TRUE  \n  AND (moves.updated_at >= '2021/07/16' OR  \n       (moves.id IN (  \n          SELECT mto_shipments.move_id  \n          FROM mto_shipments  \n          WHERE mto_shipments.updated_at >= '2021/07/16'  \n          UNION  \n          SELECT mto_service_items.move_id  \n          FROM mto_service_items  \n          WHERE mto_service_items.updated_at >= '2021/07/16'  \n          UNION  \n          SELECT payment_requests.move_id  \n          FROM payment_requests  \n          WHERE payment_requests.updated_at >= '2021/07/16')) OR  \n       (moves.orders_id IN (  \n          SELECT orders.id  \n          FROM orders  \n          WHERE orders.updated_at >= '2021/07/16')));\n")),(0,a.kt)("p",null,"This approach uses UNIONS instead of JOINS, which are quantifiably more efficient. The OR checks also save a lot of the heavy processing for the cases where it is actually needed, as opposed to always doing it upfront. "),(0,a.kt)("p",null,"EXPLAIN ANALYZE results:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Seq Scan on moves  (cost=28.19..31.36 rows=11 width=143) (actual time=1.345..1.711 rows=2 loops=1)\n  Filter: ((available_to_prime_at IS NOT NULL) AND show AND ((updated_at >= '2021-07-16 00:00:00'::timestamp without time zone) OR (hashed SubPlan 1) OR (hashed SubPlan 2)))\n  Rows Removed by Filter: 89\n  SubPlan 1\n    ->  HashAggregate  (cost=21.00..21.42 rows=42 width=16) (actual time=1.066..1.188 rows=2 loops=1)\n          Group Key: mto_shipments.move_id\n          ->  Append  (cost=0.00..20.89 rows=42 width=16) (actual time=0.177..1.024 rows=2 loops=1)\n                ->  Seq Scan on mto_shipments  (cost=0.00..4.42 rows=1 width=16) (actual time=0.137..0.208 rows=1 loops=1)\n                      Filter: (updated_at >= '2021-07-16 00:00:00+00'::timestamp with time zone)\n                      Rows Removed by Filter: 101\n                ->  Seq Scan on mto_service_items  (cost=0.00..4.34 rows=1 width=16) (actual time=0.357..0.388 rows=1 loops=1)\n                      Filter: (updated_at >= '2021-07-16 00:00:00+00'::timestamp with time zone)\n                      Rows Removed by Filter: 107\n                ->  Seq Scan on payment_requests  (cost=0.00..11.50 rows=40 width=16) (actual time=0.082..0.091 rows=0 loops=1)\n                      Filter: (updated_at >= '2021-07-16 00:00:00'::timestamp without time zone)\n                      Rows Removed by Filter: 25\n  SubPlan 2\n    ->  Seq Scan on orders  (cost=0.00..6.66 rows=1 width=16) (actual time=0.065..0.075 rows=0 loops=1)\n          Filter: (updated_at >= '2021-07-16 00:00:00'::timestamp without time zone)\n          Rows Removed by Filter: 113\nPlanning Time: 2.505 ms\nExecution Time: 2.550 ms\n")),(0,a.kt)("h2",{id:"simplified-results"},"Simplified Results"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null},"Option 1"),(0,a.kt)("th",{parentName:"tr",align:null},"Option 2"),(0,a.kt)("th",{parentName:"tr",align:null},"Option 3"),(0,a.kt)("th",{parentName:"tr",align:null},"Option 4"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Potential CPU Cost")),(0,a.kt)("td",{parentName:"tr",align:null},"34.00"),(0,a.kt)("td",{parentName:"tr",align:null},"33.48"),(0,a.kt)("td",{parentName:"tr",align:null},"55.35"),(0,a.kt)("td",{parentName:"tr",align:null},"31.36")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Total Processing Time")),(0,a.kt)("td",{parentName:"tr",align:null},"38.619 ms"),(0,a.kt)("td",{parentName:"tr",align:null},"27.740 ms"),(0,a.kt)("td",{parentName:"tr",align:null},"48.618 ms"),(0,a.kt)("td",{parentName:"tr",align:null},"5.055 ms")))),(0,a.kt)("h2",{id:"winner"},"Winner"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Option 4: Unions")," had the best results. Notable downsides are that we cannot see the connected shipments, service items, or payment requests. This is a consistent theme for all options except the flattening one, which was the most expensive by far. The moral here is that we need to limit our references to get any real gains in performance."),(0,a.kt)("p",null,"This query is also easily manipulated in case we need to update it later. For example, here's a version that JOINS with orders for the sake of returning more useful information in the output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT moves.*,  \n       orders.report_by_date,  \n       orders.orders_number  \nFROM moves  \n  INNER JOIN orders ON moves.orders_id = orders.id  \nWHERE moves.available_to_prime_at IS NOT NULL  \n  AND moves.show = TRUE  \n  AND (moves.updated_at >= '2021/07/16' OR  \n       orders.updated_at >= '2021/07/16' OR  \n       (moves.id IN (  \n          SELECT mto_shipments.move_id  \n          FROM mto_shipments  \n          WHERE mto_shipments.updated_at >= '2021/07/16'  \n          UNION  \n          SELECT mto_service_items.move_id  \n          FROM mto_service_items  \n          WHERE mto_service_items.updated_at >= '2021/07/16'  \n          UNION  \n          SELECT payment_requests.move_id  \n          FROM payment_requests  \n          WHERE payment_requests.updated_at >= '2021/07/16')));\n")),(0,a.kt)("p",null,"And the results are still great, with a max cost of 31.44 and total time of 4.951 ms."),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"We have to make concessions to have a performant fetch query on all moves. These queries are comparable as they are, but in reality, there is even more depth to evaluate for an ",(0,a.kt)("inlineCode",{parentName:"p"},"updatedAt")," that meets the criteria. We may have to just accept that it is not reasonable to take all sub-objects into consideration for this query. In particular:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We can skip ",(0,a.kt)("inlineCode",{parentName:"li"},"entitlements"),". An entitlement should never be updated without the corresponding order being amended and updated as well. So ",(0,a.kt)("inlineCode",{parentName:"li"},"orders.updated_at")," is sufficient for entitlements."),(0,a.kt)("li",{parentName:"ul"},"We can skip ",(0,a.kt)("inlineCode",{parentName:"li"},"duty_stations")," and their connected addresses. A duty station itself should not be updated significantly (can't just move a whole station to a new zipcode willy nilly). If a duty station is changed, the order will be updated with the new foreign key reference. Therefore, ",(0,a.kt)("inlineCode",{parentName:"li"},"orders.updated_at")," is also sufficient in this case.")),(0,a.kt)("p",null,"More difficult choices:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We can skip the subobjects in ",(0,a.kt)("inlineCode",{parentName:"li"},"mto_shipments"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"mto_service_items"),", and ",(0,a.kt)("inlineCode",{parentName:"li"},"payment_requests"),". This is, frankly, not actually ideal. However, many of the updates to these subobjects are either automatic or coming from the Prime themselves. Additionally, the main ",(0,a.kt)("inlineCode",{parentName:"li"},"status")," field that is the most important related to processing is on these main objects. Decisions from the TOO or TIO should accompany most updates, so basing our filter on the parent object might actually catch almost all updates of the subobjects as well."),(0,a.kt)("li",{parentName:"ul"},"We can skip the updates to ",(0,a.kt)("inlineCode",{parentName:"li"},"service_member"),". This is not covered by other updates, unfortunately. But from a process perspective, this info is not critical for the execution of the move (although it is important for coordinating with the customer). ")),(0,a.kt)("p",null,"Ultimately, one fail safe is not enough to cover the potential failure of push notifications. We cannot, and we ",(0,a.kt)("em",{parentName:"p"},"should not")," rely on one fetch to fill in the gaps for the Prime. We should instead provide a variety of methods for the Prime to search for the data they need."),(0,a.kt)("p",null,"To that end, pagination and filtering, in addition to a shipment list endpoint, would be great additions to the Prime API. More flexible GETs are our allies in a more performant system."),(0,a.kt)("h2",{id:"implementation"},"Implementation"),(0,a.kt)("p",null,"The next steps to implement this new query will be:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Update the service object ",(0,a.kt)("inlineCode",{parentName:"li"},"fetchMTOUpdates")," points at to use this new query. Check that no other endpoints are adversely affected by this."),(0,a.kt)("li",{parentName:"ul"},"Update the ",(0,a.kt)("inlineCode",{parentName:"li"},"prime.yaml")," to show that the endpoint will no longer return info on all nested objects."),(0,a.kt)("li",{parentName:"ul"},"Add a ",(0,a.kt)("inlineCode",{parentName:"li"},"getMoveByLocator")," endpoint to allow more flexibility in how we retrieve moves. Not required, but would be nice to have."),(0,a.kt)("li",{parentName:"ul"},"Consider a ",(0,a.kt)("inlineCode",{parentName:"li"},"listShipments")," endpoint that has pagination and filtering."),(0,a.kt)("li",{parentName:"ul"},"Consider more fetch endpoints.")))}u.isMDXComponent=!0}}]);