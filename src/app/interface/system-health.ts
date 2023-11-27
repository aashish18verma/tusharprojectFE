export interface SystemHealth {
    status: string,
    components: {
      databaseService: {
        status: string,
        details: {
          DatabaseService: string
        }
      },
      db: {
        status: string,
        details: {
          database: string,
        }
      },
      diskSpace: {
        status: string,
        details: {
          total: string,
          free: string,
          threshold: string,
          exists: string
        }
      }
    }
  }

