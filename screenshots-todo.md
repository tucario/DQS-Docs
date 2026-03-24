# DQS Documentation — Sugerowane zrzuty ekranu

## Legenda

- **P0** — Krytyczne, user bez tego jest zagubiony
- **P1** — Wazne, znaczaco poprawia zrozumienie
- **P2** — Nice to have, wzbogaca artykul

Status:
- DONE — plik gotowy, wstawiony do dokumentacji
- VIDEO — video modal zamiast screenshota
- TODO — do zrobienia

---

## Using DQS

| # | Artykul | Co pokazac | Sekcja | Priorytet | Nazwa pliku | Status |
|---|---------|-----------|--------|-----------|-------------|--------|
| 1 | Definition Builder Guide | Ekran wyboru Capabilities z checkmarkami i lock icon na PRO | Step 1: Select Capabilities | P0 | `def-builder-step1-capabilities.png` | DONE |
| 1b | Definition Builder Guide | Start New Definition — object picker, recent defs, naming | The 5-Step Wizard | P0 | `def-builder-start-new.png` | DONE |
| 2 | Definition Builder Guide | Lista pol z typami, search, All Fields tab | Step 2: Define Scope | P0 | `def-builder-step2-scope.png` | DONE |
| 2b | Definition Builder Guide | Scope po wyfiltrowaniu — 1 pole wybrane (Description) | Step 2: Define Scope | P1 | `def-builder-step2-scope-filtered.png` | DONE |
| 3 | Definition Builder Guide | Filter builder z AND/OR logiką i condition row | Step 3: Add Filters | P0 | `def-builder-step3-filters.png` | DONE |
| 3b | Definition Builder Guide | Filter pusty — "Add Filter" / "No Filter Needed" | Step 3: Add Filters | P1 | `def-builder-step3-filters-empty.png` | DONE |
| 4 | Definition Builder Guide | Ogolny widok Step 4: Configure (brak screenshota — zrzuty przeniesione do Completeness) | Step 4: Configure | P0 | — | TODO |
| 5 | Definition Builder Guide | Complete Definition modal — 3 opcje (Complete Only/Schedule/Run) | Step 5: Review | P0 | `def-builder-step5-review.png` | DONE |
| 6 | Definition Builder Guide | Caly flow tworzenia definicji | Calosc | P0 | `definition-creation.mp4` | VIDEO |
| 7 | Definition Builder Guide | Lista definicji z badgami statusu (Draft/Active/Archived) | Managing Definitions | P1 | `def-builder-list-view.png` | TODO |
| 8 | Running Scans | Przycisk Run Scan + confirmation dialog | Starting a Manual Scan | P0 | `running-scans-run-button.png` | TODO |
| 9 | Running Scans | Statusy skanu (Clock, Spinner, Checkmark, X) + progress bar | Scan Progress | P0 | `running-scans-progress.png` | TODO |
| 10 | Running Scans | Konfiguracja Schedule tab (czestotliwosc, czas, dzien) | Scheduling Scans (PRO) | P0 | `manage-schedule.mp4` | VIDEO |
| 11 | Running Scans | Cancel scan button + confirmation | Canceling a Scan | P2 | `running-scans-cancel.png` | TODO |
| 12 | Understanding Results | Dashboard z Overall Score + karty wymiarow z procentami | Results Dashboard | P0 | `results-dashboard-overview.png` | TODO |
| 13 | Understanding Results | Metryki Completeness: Rate, Populated Count, Null Rate, Blank Rate | Completeness Metrics | P0 | `completeness-metrics.png` | DONE |
| 14 | Understanding Results | Drill-down do rekordow z kolumnami i filtrami | Record List View | P0 | `results-record-drilldown.png` | TODO |
| 15 | Understanding Results | Eksport CSV z violations — linki do rekordow, pola, wartosci | CSV Export | P0 | `results-csv-export.png` | DONE |
| 16 | Understanding Results | Caly flow eksportu wynikow | How to Export | P0 | `export-results.mp4` | VIDEO |
| 17 | Understanding Results | Trend chart — liniowy wykres zmian jakosci w czasie | Trend Charts | P1 | `results-trend-chart.png` | TODO |
| 18 | Understanding Results | Porownanie dwoch skanow side-by-side (zielony/czerwony/szary) | Scan Comparison | P1 | `results-scan-comparison.png` | TODO |
| 19 | Core vs Pro | Tabela porownawcza z checkmarkami i X dla CORE vs PRO | Feature Comparison | P1 | `core-vs-pro-comparison.png` | TODO |
| 20 | Core vs Pro | AppExchange listing z "Get Pricing" | Upgrade Process | P2 | `core-vs-pro-upgrade.png` | TODO |

## Data Quality — Artykuly wymiarow

| # | Artykul | Co pokazac | Sekcja | Priorytet | Nazwa pliku | Status |
|---|---------|-----------|--------|-----------|-------------|--------|
| 21 | Five Dimensions | Wizualizacja 5 wymiarow z ikonami | Overview table | P2 | `five-dimensions-overview.png` | TODO |
| 22a | Completeness | Global Defaults — Blank Handling toggle, Placeholder Detection PRO | Configuring Completeness > Global Defaults | P1 | `def-builder-step4-configure.png` | DONE |
| 22b | Completeness | Field Overrides panel — lista pol z kolumnami Blanks, Placeholder | Configuring Completeness > Field Overrides | P1 | `completeness-config.png` | DONE |
| 22c | Completeness | Per-field override modal — Blank Handling i Placeholder per pole | Configuring Completeness > Field Overrides | P1 | `completeness-config-field-override.png` | DONE |
| 23 | Completeness | Dashboard metryk: Completeness Rate, Null Count, Blank Count, Placeholder Count | Metrics Dashboard | P1 | `completeness-metrics.png` | DONE |
| 24 | Validity | Picker pattern type: Email, URL, Fixed Length, Custom regex | How to Configure | P1 | `validity-config-patterns.png` | TODO |
| 25 | Validity | Custom regex input z walidacja | Custom Pattern | P1 | `validity-custom-regex.png` | TODO |
| 26 | Validity | Metryki: Validity Rate, Invalid Count, Noise Rate | Metrics Dashboard | P1 | `validity-metrics.png` | TODO |
| 27 | Uniqueness | Konfiguracja: Case Sensitive toggle, Include Blanks toggle | How to Configure | P1 | `uniqueness-config.png` | TODO |
| 28 | Uniqueness | Metryki: Uniqueness Rate, Distinct Count, Entropy, Max Frequency | Metrics Dashboard | P1 | `uniqueness-metrics.png` | TODO |
| 29 | Timeliness | Konfiguracja: Freshness Window (dni), Null As Stale, Overdue Tracking | How to Configure | P1 | `timeliness-config.png` | TODO |
| 30 | Timeliness | Metryki: Freshness Rate, Staleness Rate, Average Age, Future Rate | Metrics Dashboard | P1 | `timeliness-metrics.png` | TODO |
| 31 | Consistency | Expected Values input + "Import from Field" dialog z lista wartosci | How to Configure | P1 | `consistency-config.png` | TODO |
| 32 | Consistency | Import from Field — dialog z frequency-sorted values i checklistami | Import from Field | P1 | `consistency-import-dialog.png` | TODO |
| 33 | Consistency | Metryki: Conformance Rate, Variant Count, Dominant Values tabela | Metrics Dashboard | P1 | `consistency-metrics.png` | TODO |

## Getting Started

| # | Artykul | Co pokazac | Sekcja | Priorytet | Nazwa pliku | Status |
|---|---------|-----------|--------|-----------|-------------|--------|
| 34 | Introduction | Ikona DQS w App Launcher | Where to Find DQS | P1 | `getting-started-app-launcher.png` | TODO |
| 35 | Quick Start Guide | Ekran DQS po otwarciu — New Definition button | Step 4: Install DQS | P0 | `quick-start-new-definition.png` | TODO |
| 36 | Quick Start Guide | Wyniki pierwszego skanu — dashboard z wynikami | Step 6: Run Your First Scan | P1 | `quick-start-first-results.png` | TODO |

## AI Readiness

| # | Artykul | Co pokazac | Sekcja | Priorytet | Nazwa pliku | Status |
|---|---------|-----------|--------|-----------|-------------|--------|
| 37 | PII Detection | Preset picker: Standard (4 patterny), Critical (2), Extended (9) | Detection Presets | P1 | `pii-preset-picker.png` | TODO |
| 38 | PII Detection | Wyniki skanu: Records with PII count + PII Exposure Rate % | Scan Results | P1 | `pii-scan-results.png` | TODO |
| 39 | PII Detection | Per-field override — tabela z pattern selectorem per pole | Per-Field Overrides | P2 | `pii-per-field-overrides.png` | TODO |
| 40 | Agentforce Prep | Dashboard z 5 wymiarami + PII w jednym widoku | Assessment Phase | P1 | `agentforce-full-dashboard.png` | TODO |
| 41 | Agentforce Prep | Porownanie skanow: baseline vs post-remediation | Validation Phase | P2 | `agentforce-scan-comparison.png` | TODO |

## Best Practices

| # | Artykul | Co pokazac | Sekcja | Priorytet | Nazwa pliku | Status |
|---|---------|-----------|--------|-----------|-------------|--------|
| 42 | Measuring Data Quality | Przykladowy scorecard: Overall 82/100, wymiary, trendy | Data Quality Scorecard | P1 | `measuring-scorecard.png` | TODO |
| 43 | Common Pitfalls | Lista definicji z indicatorem schedule (recurring vs one-time) | Pitfall 1: One-time project | P2 | `pitfalls-schedule-indicator.png` | TODO |
| 44 | Data Governance | Diagram rol: Data Owner / Steward / Custodian | Three Essential Roles | P2 | `governance-roles-diagram.png` | TODO |

## Use Cases — Scenariusze konfiguracji

| # | Artykul | Co pokazac | Sekcja | Priorytet | Nazwa pliku | Status |
|---|---------|-----------|--------|-----------|-------------|--------|
| 45 | Completeness Scenarios | Konfiguracja Scenario 1: Basic Completeness + Blank As Incomplete | Scenario 1 | P2 | `scenario-completeness-1-config.png` | TODO |
| 46 | Completeness Scenarios | Wyniki Scenario 1: dashboard z metrykami | Scenario 1 Results | P2 | `scenario-completeness-1-results.png` | TODO |
| 47 | Validity Scenarios | Konfiguracja: Email pattern + Custom regex | Scenario 1 / Scenario 3 | P2 | `scenario-validity-config.png` | TODO |
| 48 | Uniqueness Scenarios | Konfiguracja: Advanced mode + Entropy wyniki | Scenario 2 | P2 | `scenario-uniqueness-advanced.png` | TODO |
| 49 | Timeliness Scenarios | Konfiguracja: Freshness Window + Overdue Tracking | Scenario 1 / Scenario 2 | P2 | `scenario-timeliness-config.png` | TODO |
| 50 | Consistency Scenarios | Import from Field dialog z frequency-ranked values | Scenario 1 | P2 | `scenario-consistency-import.png` | TODO |
| 51 | PII Scenarios | Preset wybor + per-field override konfiguracja | Scenario 1 / Scenario 3 | P2 | `scenario-pii-config.png` | TODO |

---

## Podsumowanie

| Priorytet | Razem | DONE | VIDEO | TODO |
|-----------|-------|------|-------|------|
| **P0** | 14 | 10 | 3 | 1 |
| **P1** | 24 | 4 | 0 | 20 |
| **P2** | 17 | 0 | 0 | 17 |
| **Razem** | **55** | **14** | **3** | **38** |

### Dostarczone pliki

| Plik | Typ | Uzyty w |
|------|-----|---------|
| `def-builder-start-new.png` | Screenshot | Definition Builder (#1b) |
| `def-builder-step1-capabilities.png` | Screenshot | Definition Builder (#1) |
| `def-builder-step2-scope.png` | Screenshot | Definition Builder (#2) |
| `def-builder-step2-scope-filtered.png` | Screenshot | Definition Builder (#2b) |
| `def-builder-step3-filters-empty.png` | Screenshot | Definition Builder (#3b) |
| `def-builder-step3-filters.png` | Screenshot | Definition Builder (#3) |
| `def-builder-step4-configure.png` | Screenshot | Definition Builder (#4) |
| `def-builder-step5-review.png` | Screenshot | Definition Builder (#5) |
| `completeness-config.png` | Screenshot | Completeness (#22) |
| `completeness-config-field-override.png` | Screenshot | Completeness (#22b) |
| `completeness-metrics.png` | Screenshot | Understanding Results (#13), Completeness (#23) |
| `results-csv-export.png` | Screenshot | Understanding Results (#15) |
| `definition-creation.mp4` | Video modal | Definition Builder Guide (#6) |
| `manage-schedule.mp4` | Video modal | Running Scans / Scheduling (#10) |
| `export-results.mp4` | Video modal | Understanding Results / How to Export (#16) |

### Sugerowana kolejnosc pracy

1. Najpierw P0 TODO w **Using DQS** — 8 zrzutow (Definition Builder wizard, Running Scans, Results Dashboard)
2. Potem P1 w **Data Quality dimensions** — 12 zrzutow (konfiguracja + metryki per wymiar)
3. Nastepnie P1 w **Getting Started** i **AI Readiness** — 8 zrzutow
4. Na koniec P2 (Use Cases, Best Practices) — 17 zrzutow
