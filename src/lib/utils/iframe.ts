export function notifyParentFrame(msg: { action: string; url: string }) {
    try {
        // Always use '*' for development environment
        const parentOrigin = '*';
        
        window.parent.postMessage({
            type: 'navigation',
            url: window.location.href,
            timestamp: Date.now(),
            msg
        }, parentOrigin);
    } catch (error) {
        console.warn('Failed to notify parent frame:', error);
    }
}
