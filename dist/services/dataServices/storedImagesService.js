import { getEntityServices } from "../../db.js";
export function StoredImagesService(db = getEntityServices()) {
    const em = db.entityManager;
    const repository = db.storedImage;
    const serviceRepository = db.service;
    console.log(`[StoredImagesService] context-specific em-ID: ${em.id || 'TEST'}`);
    async function postStoredImages(formInput) {
        console.log(`[StoredImagesService:postStoredImage] context-specific em-ID: ${em.id || 'TEST'}`);
        const { files, serviceId, associatedDate, userDefinedTimes } = formInput;
        const service = await serviceRepository.findOneOrFail({ id: serviceId });
        for (const file of files) {
            repository.create({
                filename: file.filename,
                filepath: file.path,
                originalName: file.originalname,
                userDefinedTime: userDefinedTimes[file.originalname],
                associatedDate,
                service,
            });
        }
        await em.flush();
        return {
            message: `Successfully stored ${files.length} images.`,
        };
    }
    return {
        postStoredImages,
    };
}
