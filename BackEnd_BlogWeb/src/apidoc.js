/**
 * @api {post} /register Register New User
 * @apiName RegisterNewUser
 * @apiGroup 
 *
 * @apiParam {String} name Name of purchases.
 * @apiParam {String} Description Decription of purchases.
 * @apiParam {Number} Video_ID Video ID of purchases.

 * @apiSuccess {String} Name Nname of the purchases.
 * @apiSuccess {String} Description  Description of the User.
 * @apiSuccess {Number} Video_ID  Video ID of the User.
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "Name": "TX07",
 *       "Description": "New Collection",
 *       "Video_ID" : "Nc23"
 *     }
 *
 * @apiError PurchasesExist The Name of the Purchases was existed!.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "PurchasesExist!"
 *     }
 * 
 */
/**
 * @api {DELETE} /me/stored/:purchase Delete Item
 * @apiName DeleteItem
 * @apiGroup Admin
 *
 * @apiParam {Number} purchase Name of product need to delete.
 *
 * @apiSuccess {String} message Message confirming the item has been deleted.
 * @apiSuccessExample {json} Successfully:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": "The item has been deleted successfully."
 *     }
 *
 * @apiError {Number} statusCode Error Code HTTP.
 * @apiError {String} message Notification error.
 * @apiErrorExample {json} Error:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "statusCode": 404,
 *       "message": "Item does not exist."
 *     }
 */
/**
 * @api {post} /purchases/:id Update Purchase
 * @apiName UpdateItem
 * @apiGroup Admin
 *
 * @apiParam {String} Name Name of purchases.
 * @apiParam {String} Description Decription of purchases.
 * @apiParam {Number} Video_ID Video ID of purchases.

 * @apiSuccess {String} Name Nname of the purchases.
 * @apiSuccess {String} Description  Description of the User.
 * @apiSuccess {Number} Video_ID  Video ID of the User.
 * 
 * @apiSuccessExample {json} Successfully:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": "Update Successfully."
 *     }
 *
 * 
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Purchases does not change!"
 *     }
 * 
 */

