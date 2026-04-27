# SampleData Backup and Restore Script
# This script backs up and restores the sampleData.ts file

param(
    [ValidateSet("backup", "restore")]
    [string]$Action = "backup"
)

$sourcePath = "d:\ADRo\AKA\Sarika\doctor-site\src\lib\sampleData.ts"
$backupPath = "d:\ADRo\AKA\Sarika\doctor-site\src\lib\sampleData.ts.backup"

function Backup-SampleData {
    try {
        if (-not (Test-Path $sourcePath)) {
            Write-Error "Source file not found: $sourcePath"
            return $false
        }
        
        Copy-Item -Path $sourcePath -Destination $backupPath -Force
        Write-Host "Backup successful: $sourcePath -> $backupPath" -ForegroundColor Green
        return $true
    }
    catch {
        Write-Error "Backup failed: $_"
        return $false
    }
}

function Restore-SampleData {
    try {
        if (-not (Test-Path $backupPath)) {
            Write-Error "Backup file not found: $backupPath"
            return $false
        }
        
        Copy-Item -Path $backupPath -Destination $sourcePath -Force
        Write-Host "Restore successful: $backupPath -> $sourcePath" -ForegroundColor Green
        return $true
    }
    catch {
        Write-Error "Restore failed: $_"
        return $false
    }
}

# Execute the requested action
switch ($Action) {
    "backup" {
        Backup-SampleData
    }
    "restore" {
        Restore-SampleData
    }
}
