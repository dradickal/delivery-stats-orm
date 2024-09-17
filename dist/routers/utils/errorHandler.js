export function ErrorHandler(error, req, res, next) {
    console.log(error);
    res.status(500).send({ message: "Oops. We have an error." });
}
