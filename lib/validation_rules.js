/* 
* Node js validation - check these links for details
* https://express-validator.github.io/docs/check-api.html
* https://github.com/validatorjs/validator.js#validators
*/

const { body } = require("express-validator");

exports.validationRules =
	[[
		body("email", "Invalid email address or password")
			.notEmpty()
			.trim()
			.escape()
			.normalizeEmail()
			.isEmail(),
	
		body("password", "The Password must be of minimum 5 characters length")
			.notEmpty()
			.trim()
			.isLength({ min: 5 }),
	],
	[
		// first Name sanitization and validation
		body('fname')
			.notEmpty()
			.trim()
			.escape()
			.withMessage('First Name required')
			.matches(/^[a-zA-Z ]*$/)
			.withMessage('Name: Only Characters with white space are allowed'),	

		// first Name sanitization and validation
		body('lname')
			.trim()
			.escape()
			.notEmpty().withMessage('Last Name required')
			.isAlpha().withMessage('Only Characters with white space are allowed'),

		//email address validation
		body("email")
			.notEmpty()
			.escape()
			.trim().withMessage('Email Address required')
			.normalizeEmail()
			.isEmail().withMessage('Invalid email address, Provide a valid email address!'),
	
		//email address validation
		body("gender", "Gender is required")
			.notEmpty(),
	
		// password validation
		body("password")
			.trim()
			.notEmpty().withMessage("Password is required")
			.isLength({min: 5, max: 20})
			.withMessage("Password lenght must be minimum 5 & maximum 20 character length")
			.isStrongPassword({ minLength: 5, 
								minLowercase: 1, 
								minUppercase: 1, 
								minNumbers: 1, 
								minSymbols: 0, 
								returnScore: false})
			.withMessage("Password must contain at least one uppercase letter, one lowercase letter, and one number"),				

		// confirm password validation
		 body('cpassword').custom((value, { req }) => {
			   if (value !== req.body.password) {
					 throw new Error('Password does not match password');
				}
				return true;
		   })
	],
	[
		// Course title sanitization and validation
		body('book_title')
			.notEmpty()
			.trim()
			.escape()
			.withMessage('Book Title is required'),	

		// Course code sanitization and validation
		body('book_author')
			.trim()
			.escape()
			.notEmpty().withMessage('Author is required'),		

		// Course description sanitization and validation
		body('book_desc')
			.trim()
			.escape()
			.notEmpty()
			.withMessage('Book description is required'),

		// Course category sanitization and validation
		body('book_genre')
			.trim()
			.escape()
			.notEmpty().withMessage('Genre is required'),

		// Certificate type sanitization and validation
		body('book_edition')
			.trim()
			.escape()
			.notEmpty().withMessage('Edition is required')
			.matches(/^[0-9]*$/).withMessage('Edition must be a number'),

		// Course duration validation
		body('book_count')
			.notEmpty().withMessage('Page count is required')
			.matches(/^[0-9]*$/)
			.withMessage('Page Count must be a number'),

		// Course cost validation
		body('book_keyword')
			.notEmpty().withMessage('Keywords are required'),
	],
	[
		// password reset validation
		body("password")
			.trim()
			.notEmpty().withMessage("Password is required")
			.isLength({min: 5, max: 20})
			.withMessage("Password must be minimum 5 & maximum 20 character length")
			.isStrongPassword({ minLength: 5, 
								minLowercase: 1, 
								minUppercase: 1, 
								minNumbers: 1, 
								minSymbols: 0, 
								returnScore: false})
			.withMessage("Password must contain at least one uppercase letter, one lowercase letter, and one number"),				

		// confirm password validation
		 body('cpassword').custom((value, { req }) => {
			   if (value !== req.body.password) {
					 throw new Error('Password does not match password');
				}
				return true;
		   })
	]]
	
	

