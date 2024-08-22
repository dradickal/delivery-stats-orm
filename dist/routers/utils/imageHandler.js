import multer from "multer";
const storage = multer.diskStorage({
    destination: './public/uploads/',
    filename: (req, file, cb) => {
        const fileExtPattern = /\.[^.\\/:*?"'<>|\r\n]+$/i;
        const fileExt = file.originalname.match(fileExtPattern)[0];
        const generatedName = `${Date.now()}-${crypto.getRandomValues(new Uint16Array(1))[0]}${fileExt}`;
        console.log('[multer:filename] ', `${file.originalname} -> ${generatedName}`);
        cb(null, generatedName);
    }
});
export function multiImagePost(fieldName, maxFileCount = 10) {
    const upload = multer({
        storage,
        limits: {
            files: maxFileCount,
            fileSize: 1000000, // 1MB
        },
        fileFilter: (req, file, cb) => {
            console.log('[multer:fileFilter] ', file.originalname);
            try {
                const validMimeTypes = ['image/jpeg', 'image/png'];
                if (!(validMimeTypes.includes(file.mimetype))) {
                    console.log(`[multer:fileFilter] Invalid MIMEtype on file: ${file.originalname}`);
                    cb(null, false);
                }
                cb(null, true);
            }
            catch (e) {
                console.log('[multer:fileFilter]', e);
                cb(new Error('[multer:fileFilter] Error during file check'));
            }
        }
    });
    return upload.array(fieldName);
}
