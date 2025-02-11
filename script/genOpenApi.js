import { generateService } from "@umijs/openapi";

const BASE_URL = "https://promonkeyli.top:8080";

generateService({
  requestLibPath: 'import request from "@/utils/request/index"',
  schemaPath: `${BASE_URL}/swagger/doc.json`,
  serversPath: "src",
});
