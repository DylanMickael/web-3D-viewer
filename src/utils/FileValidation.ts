export function is3DFileValid(file: File | undefined): boolean {
    if (file) {
        const ext = file.name.split('.').pop()?.toLowerCase();
        if (ext === 'glb' || ext === 'gltf') {
            return true;
        } 
    }
    alert('Seuls les fichiers .glb et .gltf sont acceptés.');
    return false;
}