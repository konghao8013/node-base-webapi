// this shim is required
import "reflect-metadata"
import swaggerUi from 'swagger-ui-express';
import { createExpressServer, getMetadataArgsStorage } from 'routing-controllers';
import { routingControllersToSpec } from 'routing-controllers-openapi'
import { UserController } from './UserController';

// creates express app, registers all controller routes and returns you express app instance
const app = createExpressServer({
    routePrefix: '/api',
    controllers: [UserController], // we specify controllers we want to use
});

const storage = getMetadataArgsStorage()
//console.log(storage)
const spec = routingControllersToSpec(storage,{routePrefix:"/api"});
//console.log(spec)

// var openAPI = express();
// openAPI.get("/swagger/docs/v1", (req, res) => {
//     res.send(spec);
// })
// openAPI.listen(3101);

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(spec,));

// run express application on port 3000
app.listen(3100);