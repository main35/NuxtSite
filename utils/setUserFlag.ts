const keyPrefix: string = 'ash-'

function storage(): Pick<Storage, 'getItem' | 'setItem'> {
  if (import.meta.client) {
    return localStorage
  } else {
    // Shims for server
    return {
      getItem: (key: string): string | null => {
        return 'true'
      },
      setItem: (key: string, value: string): void => {},
    }
  }
}

function getPreKey(key: string): string {
  return keyPrefix + key
}

export function getFlag(key: string, defaultVal?: boolean): boolean {
  key = getPreKey(key)

  if (storage().getItem(key) === null) {
    if (defaultVal) {
      return defaultVal
    } else {
      return false
    }
  } else {
    return storage().getItem(key) === 'true'
  }
}

export function setFlag(key: string, value: boolean): void {
  key = getPreKey(key)
  storage().setItem(key, value.toString())
}
