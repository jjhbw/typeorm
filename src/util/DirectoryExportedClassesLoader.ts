import {Logger} from "../logger/Logger";
/**
 * Loads all exported classes from the given directory.
 */
export function importClassesFromDirectories(logger: Logger, directories: string[], formats = [".js", ".cjs", ".ts"]): Function[] {
    // Function has been removed due to incompatibility with Webpack (used dynamic require())
    return []
}

/**
 * Loads all json files from the given directory.
 */
export function importJsonsFromDirectories(directories: string[], format = ".json"): any[] {
    // "Function has been removed due to incompatibility with Webpack (used dynamic require())"
    return []
}
