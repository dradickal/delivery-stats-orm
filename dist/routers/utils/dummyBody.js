// @ts-nocheck
export function dummyBody(req, data) {
    return {
        imageCount: req.files?.length,
        acceptedFiles: req.files?.map(file => file.filename),
        ...req.body,
        ...data,
    };
}
