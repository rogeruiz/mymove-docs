"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[8856],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=p(a),c=r,m=f["".concat(l,".").concat(c)]||f[c]||d[c]||o;return a?n.createElement(m,s(s({ref:t},u),{},{components:a})):n.createElement(m,s({ref:t},u))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},3676:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={sidebar_position:10},s="Fake Data Generation",i={unversionedId:"tools/locust/fake-data-generation",id:"tools/locust/fake-data-generation",title:"Fake Data Generation",description:"We have several helpers to generate fake data for requests, allowing us to create more dynamic",source:"@site/docs/tools/locust/fake-data-generation.md",sourceDirName:"tools/locust",slug:"/tools/locust/fake-data-generation",permalink:"/mymove-docs/docs/tools/locust/fake-data-generation",draft:!1,editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/tools/locust/fake-data-generation.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"toolsSidebar",previous:{title:"Adding or Editing Load Tests",permalink:"/mymove-docs/docs/tools/locust/adding-or-editing-load-tests"},next:{title:"API Parsers",permalink:"/mymove-docs/docs/tools/locust/api-parsers"}},l={},p=[{value:"Fake API Data Generator",id:"fake-api-data-generator",level:2},{value:"Base Fake Data Generator",id:"base-fake-data-generator",level:2},{value:"References",id:"references",level:2}],u={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"fake-data-generation"},"Fake Data Generation"),(0,r.kt)("p",null,"We have several helpers to generate fake data for requests, allowing us to create more dynamic\nbodies and simulating varied user input/behavior. "),(0,r.kt)("h2",{id:"fake-api-data-generator"},"Fake API Data Generator"),(0,r.kt)("p",null,"We have a function called ",(0,r.kt)("inlineCode",{parentName:"p"},"get_api_fake_data_generator")," that will return an object you can use to generate fake API\ndata."),(0,r.kt)("p",null,"Here is what it would look like to use the fake data generator in a ",(0,r.kt)("inlineCode",{parentName:"p"},"TaskSet"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# -*- coding: utf-8 -*-\n"""\nExample of a TaskSet file using the fake data generator...\n"""\nimport logging\nimport random\nfrom http import HTTPStatus\n\nfrom locust import tag, task\n\nfrom utils.constants import ZERO_UUID\nfrom utils.parsers import APIKey, get_api_fake_data_generator\nfrom utils.request import log_response_failure, log_response_info\nfrom utils.rest import RestResponseContextManager\nfrom utils.task import RestTaskSet\nfrom utils.types import JSONArray, JSONObject\n\n\nlogger = logging.getLogger(__name__)\nfake_data_generator = get_api_fake_data_generator()\n\n\n# tags are useful to add at a TaskSet and task level to enable running only specific load tests.\n@tag(\'support\')\nclass SupportTasks(RestTaskSet):\n    """\n    Description of the flow for these tasks here.\n    """\n\n    @task\n    def stop(self) -> None:\n        """\n        This ensures that at some point, the user will stop running the tasks in this task set.\n        """\n        self.interrupt()\n\n    @tag(\'createMTOShipment\')\n    @task\n    def create_mto_shipment(self) -> None:\n        """\n        Create a shipment on a move.\n        """\n        # First we\'ll need a move to work with\n        moves_path, request_kwargs = self.request_preparer.prep_prime_request(endpoint="/moves")\n    \n        with self.rest(method="GET", url=moves_path, **request_kwargs) as resp:\n            # This will let our editors know that we expect `resp` to be an instance of\n            # `RestResponseContextManager`, which then lets it know what type hints to suggest below.\n            resp: RestResponseContextManager\n            \n            # This function helps us log the response status code uniformly across requests.\n            log_response_info(response=resp)\n            \n            if resp.status_code == HTTPStatus.OK:\n                moves: JSONArray = resp.js\n            else:\n                # if you wanted to, you could mark this load test as a failure by doing this:\n                resp.failure("No moves found!")\n                \n                # This function helps us log info about the response and request when there are errors.\n                log_response_failure(response=resp)\n                \n                return\n    \n        # You can filter more if you need a specific move\n        move_to_use = random.choice(moves)\n    \n        # The fake data generator allows us to define overrides if there are specific values we want (or\n        # don\'t want) it to use.\n    \n        # We\'ll set the move ID and set a few other IDs to be a ZERO_UUID value because we want it to\n        # create those objects and thus can\'t use a non-zero UUID. We\'re also setting the agents to\n        # empty list for simplicity here, but in our real version there\'s more to it.\n        overrides = {\n            "moveTaskOrderID": move_to_use[\'id\'],\n            "agents": [],\n            "pickupAddress": {"id": ZERO_UUID},\n            "destinationAddress": {"id": ZERO_UUID},\n            "mtoServiceItems": [],\n        }\n    \n        # Now we can use the fake data generator to generate the fake request data.\n        payload = fake_data_generator.generate_fake_request_data(\n            api_key=APIKey.PRIME,  # This tells the generator which API spec to look at.\n            path="/mto-shipments",\n            method="post",\n            overrides=overrides,\n        )\n    \n        # Now we can make our request:\n        create_shipment_path, request_kwargs = self.request_preparer.prep_prime_request(endpoint="/mto-shipments")\n    \n        # The `generate_fake_request_data` method returns a JSONType object which can be used in our\n        # request as the data payload.\n        with self.rest(method="POST", url=create_shipment_path, data=payload, **request_kwargs) as resp:\n            resp: RestResponseContextManager\n            \n            log_response_info(response=resp)\n            \n            # Do whatever else you need to here.\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"get_api_fake_data_generator")," does not need to be used in the context of a ",(0,r.kt)("inlineCode",{parentName:"p"},"TaskSet")," so you can use\nit wherever you want. It caches the fake data generator so this means that even if you use it in\nmultiple places, only the first call to it will parse the API files (which is slow)."),(0,r.kt)("p",null,"You can read more about the internals of the fake API data generator in the ",(0,r.kt)("a",{parentName:"p",href:"./api-parsers"},"API Parsers")," page."),(0,r.kt)("h2",{id:"base-fake-data-generator"},"Base Fake Data Generator"),(0,r.kt)("p",null,"One downside to the fake API data generator is that it will generate data for a given endpoint including all the\navailable fields. This can be an issue if you are trying to emulate a flow that hits the same endpoint multiple times,\ne.g. customer on-boarding uses the same endpoint and gradually calls it with new info each time. For cases like this, it\nis more useful to use a more basic data generator, ",(0,r.kt)("inlineCode",{parentName:"p"},"utils.fake_data.MilMoveData"),". This class uses a combination of\n",(0,r.kt)("inlineCode",{parentName:"p"},"faker")," and custom providers to generate appropriate fake data. It is the class that the fake API data generator uses at\na lower level, and so it can be good to use it to generate more consistent data that accounts for our needs."),(0,r.kt)("p",null,"To use it, you would import it and initialize the class (without arguments). Then you can use its\n",(0,r.kt)("inlineCode",{parentName:"p"},"get_fake_data_for_type")," method to generate specific types of data, e.g. a first name, or a phone number. You pass the\ntype of data you expect as an argument, using the ",(0,r.kt)("inlineCode",{parentName:"p"},"enum")," ",(0,r.kt)("inlineCode",{parentName:"p"},"utils.constants.DataType")," defining the type you want. Here is\na small example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# -*- coding: utf-8 -*-\n"""\nExample of a task using MilMoveData\n"""\nimport json\nimport logging\nfrom http import HTTPStatus\nfrom typing import Optional\n\nfrom locust import tag, task\n\nfrom utils.auth import UserType, create_user\nfrom utils.constants import DataType\nfrom utils.fake_data import MilMoveData\nfrom utils.request import log_response_failure, log_response_info\nfrom utils.rest import RestResponseContextManager\nfrom utils.task import RestTaskSet\nfrom utils.types import JSONArray, JSONObject\n\n\nlogger = logging.getLogger(__name__)\n\n\nclass MilMoveTasks(RestTaskSet):\n    """\n    Set of tasks that can be called for the MilMove interface.\n    """\n\n    def on_start(self):\n        """\n        Creates a login right at the start of the TaskSet and stops task execution if the login fails.\n        """\n        success = create_user(request_preparer=self.request_preparer, session=self.client, user_type=UserType.MILMOVE)\n\n        if not success:\n            logger.error("Failed to create a user")\n            self.interrupt()\n\n    @task\n    def stop(self) -> None:\n        """\n        This ensures that at some point, the user will stop running the tasks in this task set.\n        """\n        self.interrupt()\n\n    @tag("onboardCustomerWorkflow")\n    @task\n    def onboard_customer(self) -> None:\n        """\n        Goes through the basic on-boarding flow for a customer.\n        """\n        # For the sake of brevity, we\'ll hard-code a fake ID here, but in a real test you\'d have to get this.\n        service_member_id = "149UYM-THIA90-3450IU"\n\n        # initialize the fake data class\n        milmove_faker = MilMoveData()\n\n        # we\'re going to skip the first onboarding step because we don\'t need the generator for it, but here is the \n        # setup of the payload for the next step, which would use the generator:\n\n        payload = {\n            "id": service_member_id,\n            "first_name": milmove_faker.get_fake_data_for_type(data_type=DataType.FIRST_NAME),\n            "middle_name": milmove_faker.get_fake_data_for_type(data_type=DataType.FIRST_NAME),\n            "last_name": milmove_faker.get_fake_data_for_type(data_type=DataType.LAST_NAME),\n            "suffix": "",\n        }\n\n        # Then you can use the payload.\n\n')),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://faker.readthedocs.io/en/stable/index.html"},"Faker Documentation"))))}d.isMDXComponent=!0}}]);