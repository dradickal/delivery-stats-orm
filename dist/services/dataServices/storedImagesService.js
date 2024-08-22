import { getEntityServices } from "../../db.js";
export function StoredImagesService(db = getEntityServices()) {
    const em = db.entityManager;
    const repository = db.storedImage;
    const serviceRepository = db.service;
    console.log(`[StoredImagesService] context-specific em-ID: ${em.id || 'TEST'}`);
    async function postStoredImages(formInput) {
        console.log(`[StoredImagesService:postStoredImage] context-specific em-ID: ${em.id || 'TEST'}`);
        const { files, serviceId, associatedDate } = formInput;
        const serviceRef = serviceRepository.getReference(serviceId);
        for (const file of files) {
            repository.create({
                filename: file.filename,
                filepath: file.path,
                associatedDate,
                service: serviceRef,
            });
        }
        return {
            method: 'postStoredImage',
        };
    }
    return {
        postStoredImages,
    };
}
