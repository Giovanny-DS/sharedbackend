import _ from "lodash"
import UserService from '../../user/services/user.service'

/**
 * @oas [get] /auth
 * operationId: "GetAuth"
 * summary: "Get Session"
 * x-authenticated: true
 * description: "Gets the currently logged in User."
 * tags:
 *   - Auth
 * responses:
 *  "200":
 *    description: OK
 *    content:
 *      application/json:
 *        schema:
 *          properties:
 *            user:
 *              $ref: "#/components/schemas/user"
 */
export default async (req, res) => {
  try {
    const userService: UserService = req.scope.resolve("userService")
    const user = await userService.retrieve(req.user.userId, {
      relations: ["teamRole", "teamRole.permissions"],
    })
    console.log({
      custom: 'retreive custom user',
    })
    const cleanRes = _.omit(user, ["password_hash", "teamRole"])
    res.status(200).json({ user: cleanRes, test: 'test' })
  } catch (err) {
    res.sendStatus(400)
  }
}