// @ts-nocheck
export function dummyBody(req, data) {
    const times = JSON.parse(req.body.userDefinedTimes);
    console.log(times);
    return {
        imageCount: req.files?.length,
        acceptedFiles: req.files?.map(file => ({
            'fileName': file.filename,
            'originalName': file.originalname,
            'definedTime': times.hasOwnProperty(file.originalname) ? times[file.originalname] : null,
        })),
        ...req.body,
        ...data,
    };
}
