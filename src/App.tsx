import React, { useState, useEffect } from 'react';
import { Calculator } from 'lucide-react';

interface Drug {
  name: string;
  dose: string;
}

interface Category {
  name: string;
  drugs: Drug[];
}

function App() {
  const [weight, setWeight] = useState<number>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedDrug, setSelectedDrug] = useState<string>('');
  const [calculatedDose, setCalculatedDose] = useState<string>('');

  const categories: Category[] = [
    {
      name: 'Pyretic and Pain Relief Medicine',
      drugs: [
        { name: 'Codeine phosphate', dose: '0.5-1 Mg/Kg/Dose' },
        { name: 'Ibuprofen', dose: '5-10 Mg/Kg/Dose' },
        { name: 'Diclofenac sodium', dose: '1-3 Mg/Kg/Day' },
        { name: 'Indomethacin', dose: '3 Mg/Kg/Day' },
        { name: 'Indomethacin for preterm baby', dose: '0.2 Mg/Kg/Dose 8 hourly for 3 days' },
        { name: 'Naproxen', dose: '10-20 Mg/Kg/Day' },
        { name: 'Paracetamol', dose: '15 Mg/Kg/Dose' },
        { name: 'Mefenamic acid', dose: '25 Mg/Kg/Day' },
        { name: 'Morphine', dose: '0.1-0.2 Mg/Kg/Dose' },
        { name: 'Pentazocine', dose: '0.5-1 Mg/Kg/Day' },
        { name: 'Piroxicam', dose: '5-25 Mg/Day' },
        { name: 'Roficoxib', dose: '25-50 Mg/Kg/Day' }
      ]
    },
    {
      name: 'Antibiotics',
      drugs: [
        { name: 'Amikacin', dose: '15-20 Mg/Kg/Day' },
        { name: 'Gentamycin', dose: '5-7.5 Mg/Kg/Day' },
        { name: 'Netilmicin', dose: '5-7.5 Mg/Kg/Day' },
        { name: 'Cefaclor', dose: '20-24 Mg/Kg/Day' },
        { name: 'Cefadroxil', dose: '30 Mg/Kg/Day' },
        { name: 'Cefazolin', dose: '50-100 Mg/Kg/Day' },
        { name: 'Cefdinir', dose: '15 Mg/Kg/Day' },
        { name: 'Cefepime', dose: '100 Mg/Kg/Day' },
        { name: 'Cefixime', dose: '8-20 Mg/Kg/Day' },
        { name: 'Cefoperazon', dose: '100-150 Mg/Kg/Day' },
        { name: 'Cefoperazon + Sulbactam', dose: '40-80 Mg/Kg/Day' },
        { name: 'Cefotaxime', dose: '100-150 Mg/Kg/Day' },
        { name: 'Cefpirome', dose: '30-60 Mg/Kg/Day' },
        { name: 'Cefpodoxime', dose: '10 Mg/Kg/Day' },
        { name: 'Cefprozil', dose: '15-30 Mg/Kg/Day' },
        { name: 'Ceftazidime', dose: '100-150 Mg/Kg/Day' },
        { name: 'Ceftriaxone', dose: '50-100 Mg/Kg/Day' },
        { name: 'Ceftibuten', dose: '9 Mg/Kg/Day' },
        { name: 'Ceftizoxime', dose: '100-200 Mg/Kg/Day' },
        { name: 'Cefuroxime', dose: '100-150 Mg/Kg/Day' },
        { name: 'Cephalexin', dose: '25-100 Mg/Kg/Day' },
        { name: 'Ciprofloxacin', dose: '20-40 Mg/Kg/Day' },
        { name: 'Levofloxacin', dose: '10 Mg/Kg/Day' },
        { name: 'Nalidixic Acid', dose: '50 Mg/Kg/Day' },
        { name: 'Norfloxacin', dose: '10-15 Mg/Kg/Day' },
        { name: 'Ofloxacin', dose: '5-15 Mg/Kg/Day' },
        { name: 'Pefloxacin', dose: '12 Mg/Kg/Day' },
        { name: 'Clindamycin', dose: '20-30 Mg/Kg/Day' },
        { name: 'Lincomycin', dose: '30-60 Mg/Kg/Day' },
        { name: 'Clarithromycin', dose: '15 Mg/Kg/Day' },
        { name: 'Roxithromycin', dose: '5-8 Mg/Kg/Day' },
        { name: 'Erythromycin', dose: '30-50 Mg/Kg/Day' },
        { name: 'Amoxycillin', dose: '25-50 Mg/Kg/Day' },
        { name: 'Ampicillin', dose: '100-200 Mg/Kg/Day' },
        { name: 'Carbenicillin', dose: '400-600 Mg/Kg/Day' },
        { name: 'Cloxacillin', dose: '50-100 Mg/Kg/Day' },
        { name: 'Penicillin G Aqueous', dose: '100000-200000 unit/Kg/dose 4-6 hourly' },
        { name: 'Penicillin G benzathine', dose: '0.6 mega Unit IM' },
        { name: 'Pipracillin + Tazobactum', dose: '300-400 Mg/Kg/Day' },
        { name: 'Imipenem', dose: '60-100 Mg/Kg/Day' },
        { name: 'Meropenem', dose: '60 Mg/Kg/Day' },
        { name: 'Trimethoprim sulfamethoxazole', dose: '5-8 Mg/Kg/Day' },
        { name: 'Aztreonam', dose: '90-120 Mg/Kg/Day' },
        { name: 'Chloramphenicol', dose: '50-75 Mg/Kg/Day' },
        { name: 'Colistin sulphate', dose: '5-15 Mg/Kg/Day' },
        { name: 'Doxycycline', dose: '2-5 Mg/Kg/Day' },
        { name: 'Furazolidone', dose: '6 Mg/Kg/Day' },
        { name: 'Nitrofurantoin', dose: '5-7 Mg/Kg/Day' },
        { name: 'Linezolid', dose: '20 Mg/Kg/Day' },
        { name: 'Minocycline', dose: '4 Mg/Kg/Day' },
        { name: 'Teicoplanin', dose: '10 Mg/Kg/Day' },
        { name: 'Tetracycline', dose: '25-50 Mg/Kg/Day' },
        { name: 'Vancomycin', dose: '40-60 Mg/Kg/Day' }
      ]
    },
    {
      name: 'Anticoagulant',
      drugs: [
        { name: 'Heparin', dose: '50-unit IV bolus than 10-25 Unit/Kg/hour' },
        { name: 'Warfarin', dose: '0.05-0.34 Mg/Kg/Day' }
      ]
    },
    {
      name: 'Anticonvulsants',
      drugs: [
        { name: 'ACTH', dose: '30-40 IU/Day' },
        { name: 'Carbamazepine', dose: '10-30 Mg/Kg/Day' },
        { name: 'Clobazam', dose: '0.1 Mg/Kg/Day' },
        { name: 'Clonazepam', dose: '0.01-0.03 Mg/Kg/Day' },
        { name: 'Diazepam', dose: '0.2-0.5 Mg/Kg/Day' },
        { name: 'Ethosuximide', dose: '15 Mg/Kg/Day' },
        { name: 'Gabapentin', dose: '30-60 Mg/Kg/Day' },
        { name: 'Lacosamide', dose: '1 Mg/Kg/Day' },
        { name: 'Lamotrigine', dose: '5-10 Mg/Kg/Day' },
        { name: 'Levetiracetam', dose: '10 Mg/Kg/Day' },
        { name: 'Lorazepam', dose: '0.05-0.1 Mg/Kg/Day' },
        { name: 'Midazolam', dose: '0.1-0.2 Mg/Kg/Day' },
        { name: 'Nitrazepam', dose: '0.2-1 Mg/Kg/Day' },
        { name: 'Oxyacarnezepime', dose: '8-10 Mg/Kg/Day' },
        { name: 'Phenytoin', dose: '15-20 Mg/Kg/Loading dose' },
        { name: 'Phenobarbitone', dose: '15-20 Mg/Kg/Loading Dose' },
        { name: 'Paraldehyde', dose: '0.1-0.2 Mg/Kg/Day' },
        { name: 'Prednisolone', dose: '2 Mg/Kg/Day' },
        { name: 'Pyridoxine', dose: '50-100 Mg/Kg/Day' },
        { name: 'Thiopental', dose: '5-10 Mg/Kg/Day' },
        { name: 'Topiramate', dose: '1-10 Mg/Kg/Day' },
        { name: 'Valproate Sodium', dose: '10-60 Mg/Kg/Day' },
        { name: 'Vigabatrin', dose: '50-150 Mg/Kg/Day' }
      ]
    },
    {
      name: 'Antiemetics',
      drugs: [
        { name: 'Chlorpromazine', dose: '0.5-40 Mg/Kg/Day' },
        { name: 'Dimenhydrinate', dose: '5-75 Mg/Kg/Day' },
        { name: 'Domperidone', dose: '0.2-0.4 Mg/Kg/Dose' },
        { name: 'Granisetron', dose: '10-20 microgram/Kg/Dose' },
        { name: 'Metoclopramide', dose: '0.1-0.8 Mg/Kg/Dose' },
        { name: 'Ondansetron', dose: '2-4 Mg/Kg/Dose' },
        { name: 'Prochlorperazine', dose: '0.4 Mg/Kg/Day' },
        { name: 'Promethazine', dose: '0.5 Mg/Kg/Dose' }
      ]
    },
    {
      name: 'Antifungal Medicines',
      drugs: [
        { name: 'Fluconazole', dose: '3-5 Mg/Kg/Day' },
        { name: 'Griseofulvin', dose: '5-15 Mg/Kg/Day' },
        { name: 'Itraconazole', dose: '200-400 Mg/Kg/Day' },
        { name: 'Ketoconazole', dose: '3.3-6.6 Mg/Kg/Day' },
        { name: 'Terbinafine', dose: '5-8 Mg/Kg/Day' },
        { name: 'Nystatin', dose: '1-2 million Unit/Day' }
      ]
    },
    {
      name: 'Antihistaminics',
      drugs: [
        { name: 'Astemizole', dose: '0.2 Mg/Kg/Day' },
        { name: 'Cetirizine', dose: '2.5-5 Mg/Kg/Day' },
        { name: 'Chlorpheniramine', dose: '0.35-5 Mg/Kg/Day' },
        { name: 'Cyproheptadine', dose: '0.25-12 Mg/Kg/Day' },
        { name: 'Desloratidine', dose: '1-5 Mg/Kg/Day' },
        { name: 'Diphenhydramine', dose: '5-25 Mg/Kg/Day' },
        { name: 'Fexofenadine', dose: '15-120 Mg/Kg/Day' },
        { name: 'Hydroxyzine', dose: '2 Mg/Kg/Day' },
        { name: 'Ketotifen', dose: '1 Mg/Kg/Day' },
        { name: 'Levocetirizine', dose: '0.125-2.5 Mg/Kg/Day' },
        { name: 'Loratadine', dose: '5-10 Mg/Kg/Day' },
        { name: 'Pheniramine', dose: '0.5 Mg/Kg/Day' },
        { name: 'Promethazine', dose: '0.1-0.5 Mg/Kg/Day' }
      ]
    },
    {
      name: 'Antihypertension Medicines',
      drugs: [
        { name: 'Amiloride', dose: '0.4-0.6 Mg/Kg/Day' },
        { name: 'Amlodipine', dose: '0.05-0.5 Mg/Kg/Day' },
        { name: 'Atenolol', dose: '0.5-2 Mg/Kg/Day' },
        { name: 'Captopril', dose: '0.5-6 Mg/Kg/Day' },
        { name: 'Clonidine', dose: '15-25 microgram/Kg/day' },
        { name: 'Labetalol', dose: '10-40 Mg/Kg/Day' },
        { name: 'Losartan', dose: '0.7-1.4 Mg/Kg/Day' },
        { name: 'Lisinopril', dose: '0.07 Mg/Kg/Day' },
        { name: 'Methyldopa', dose: '5-40 Mg/Kg/Day' },
        { name: 'Diazoxide', dose: '8-15 Mg/Kg/Day' },
        { name: 'Enalapril', dose: '0.1-1 Mg/Kg/Day' },
        { name: 'Hydralazine', dose: '0.5-0.7 Mg/Kg/Day' },
        { name: 'Metoprolol', dose: '1-4 Mg/Kg/Day' },
        { name: 'Minoxidil', dose: '0.2-1 Mg/Kg/Day' },
        { name: 'Phentolamine', dose: '0.05-0.1 Mg/Kg/Day' },
        { name: 'Ramipril', dose: '2.5-6 Mg/Kg/Day' },
        { name: 'Reserpine', dose: '0.02-0.07 Mg/Kg/Day' },
        { name: 'Propranolol', dose: '0.5-5 Mg/Kg/Day' },
        { name: 'Sodium nitroprusside', dose: '0.3-8 microgram/Kg/minute IV infusion' }
      ]
    },
    {
      name: 'Antimalarial',
      drugs: [
        { name: 'Artemether', dose: '3.2 Mg/Kg/Day on 1st day, than 1.6 mg/Kg daily for 5 Days' },
        { name: 'Artesunate', dose: '2.4 mg/Kg/Dose IV at 0,12,24 hours, followed by OD for 7 Days' },
        { name: 'Chloroquine', dose: '10 Mg/Kg stat, followed by 5 Mg/Kg at 6 hr,24 hr,48 hr' },
        { name: 'Primaquine', dose: '0.25-0.5 Mg/Kg/Day for 14 days' },
        { name: 'Quinine', dose: '30 Mg/Kg/Day' }
      ]
    },
    {
      name: 'Antiprotozoal Agent',
      drugs: [
        { name: 'Metronidazole', dose: '15-50 Mg/Kg/Day' },
        { name: 'Nitazoxanide', dose: '100-500 Mg/Day' },
        { name: 'Ornidazole', dose: '40 Mg/Kg/Day' },
        { name: 'Tinidazole', dose: '50 Mg/Kg/Day' }
      ]
    },
    {
      name: 'Antispasmodics',
      drugs: [
        { name: 'Dicyclomine', dose: '12-20 drops before feed(6-24month), 1 ML above 2 years' },
        { name: 'Drotaverine', dose: '1-6 Year 20 Mg/TDS, above 6-year 40 Mg/TDS' },
        { name: 'Hyoscine', dose: '10-20 Mg/Kg/Day' },
        { name: 'Simethicone', dose: '20-40 Mg/Kg/Day' }
      ]
    },
    {
      name: 'Antitoxin And Immunoglobulins',
      drugs: [
        { name: 'Hepatitis b immunoglobulins', dose: '100-200 IU' },
        { name: 'Rabies Human specific immunoglobulins (HRIG)', dose: '20 Unit/Kg' },
        { name: 'Rabies specific immunoglobulins (Equine)', dose: '40 Unit/Kg' },
        { name: 'Varicella zoster immunoglobulin (VZIG)', dose: '125 Unit/Kg' }
      ]
    },
    {
      name: 'Antitubercular Drugs',
      drugs: [
        { name: 'Capreomycin', dose: '15-30 Mg/Kg/Day' },
        { name: 'Cycloserine', dose: '10 Mg/Kg/Day' },
        { name: 'Ethambutol', dose: '15-20 Mg/Kg/Day' },
        { name: 'Rifampicin', dose: '10-20 Mg/Kg/Day' },
        { name: 'Ethionamide', dose: '15-20 Mg/Kg/Day' },
        { name: 'Isoniazid', dose: '7-14 Mg/Kg/Day' },
        { name: 'Kanamycin', dose: '15 Mg/Kg/Day' },
        { name: 'Prothionamide', dose: '15-20 Mg/Kg/Day' },
        { name: 'Pyrazinamide', dose: '30-40 Mg/Kg/Day' },
        { name: 'Streptomycin', dose: '15-20 Mg/Kg/Day' }
      ]
    },
    {
      name: 'Antiviral Drugs',
      drugs: [
        { name: 'Acyclovir', dose: '10 Mg/Kg/Day' },
        { name: 'Adenine', dose: '15-30 Mg/Kg/Day' },
        { name: 'Famciclovir', dose: '500 Mg TDS' },
        { name: 'Ganciclovir', dose: '10 Mg/Kg/Day' },
        { name: 'Idoxuridine', dose: 'Topical Application 0.1-0.5%' },
        { name: 'Isoprinosine', dose: '50-100 Mg/Kg/Day' },
        { name: 'Oseltamivir', dose: '12-75 Mg/Kg/Day' },
        { name: 'Ribavirin', dose: '6 Gram+100 Ml NS than nebulize' },
        { name: 'Trifluridine', dose: '1% drop for herpes simplex conjunctivitis' },
        { name: 'Valganciclovir', dose: '15-18 Mg/Kg/Dose' },
        { name: 'Zanamivir', dose: '10 Mg/Kg/Day' },
        { name: 'Didanosine', dose: '50-12 mg/m2' },
        { name: 'Efavirenz', dose: '200-400 Mg/Kg/Day' },
        { name: 'Lamivudine', dose: '4-150 Mg/Kg/Day' },
        { name: 'Lopinavir+ritonavir', dose: '12-400 Mg/Kg/Day' },
        { name: 'Abacavir', dose: '8-300 Mg/Kg/Day' },
        { name: 'Nelfinavir', dose: '55-1000 Mg/Kg/Day' },
        { name: 'Nevirapine', dose: '2 Mg/Kg/Day stat dose' },
        { name: 'Stavudine', dose: '1 Mg/Kg/Day' },
        { name: 'Zidovudine', dose: '1.5 Mg/Kg/Dose' },
        { name: 'Tenofovir', dose: '300 Mg/Kg/Day' },
        { name: 'Zalicitabine', dose: '0.01 Mg/Kg/Dose' }
      ]
    },
    {
      name: 'Bronchodilators',
      drugs: [
        { name: 'Adrenaline', dose: '0.01 Ml/Kg/Dose (1:1000) IM' },
        { name: 'Aminophylline', dose: '15-20 Mg/Kg/Day' },
        { name: 'Bambuterol', dose: '5-10 Mg/Kg/Day' },
        { name: 'Beclomethasone dipropionate', dose: '200-1000 microgram/Day (BD or TDS)' },
        { name: 'Budesonide', dose: '100-800 microgram/Day (BD-Dose)' },
        { name: 'Ciclesonide', dose: '80-160 microgram/Day' },
        { name: 'Doxofylline', dose: '6-12 Mg/Kg/Day' },
        { name: 'Fluticasone propionate', dose: '50-500 µg/Day (BD)' },
        { name: 'Formoterol fumarate', dose: '12 µg BD' },
        { name: 'Ipratropium bromide', dose: '250 µg +2 ML NS over 10 min every 20 min for 3 Dose' },
        { name: 'Levosalbutamol', dose: '1-2 Mg/Kg/Day' },
        { name: 'Mometasone', dose: '50 µg OD' },
        { name: 'Montelukast', dose: '4-10 Mg/Kg/Day' },
        { name: 'Salbutamol', dose: '0.1-0.4 Mg/Kg/Day' },
        { name: 'Terbutaline', dose: '0.1-0.15 Mg/Kg/Day' },
        { name: 'Theophylline', dose: '15-25 Mg/Kg/Day' },
        { name: 'Zafirlukast', dose: '20 Mg/Kg/Day' }
      ]
    },
    {
      name: 'Cardiotonics',
      drugs: [
        { name: 'Epinephrine', dose: '0.1 ml/Kg/Dose (1:10000)' },
        { name: 'Amrinone', dose: '0.75 mg/kg IV bolus over 2-3 minute' },
        { name: 'Digoxin', dose: '20-40 µg' },
        { name: 'Dobutamine', dose: '5-20 µg/Kg/min IV continuous infusion' },
        { name: 'Dopamine', dose: '5-30 µg/Kg/min continue infusion' },
        { name: 'Mephentermine', dose: '0.4 Mg/Kg/Dose bolus or slow infusion' },
        { name: 'Milrinone', dose: '50-75 µg/Kg loading dose over 10-60 min' },
        { name: 'Norepinephrine', dose: '0.05-0.1 20 µg/Kg/min' },
        { name: 'Vasopressin', dose: '0.3-2.0 mu/kg/min' }
      ]
    },
    {
      name: 'Diuretics',
      drugs: [
        { name: 'Acetazolamide', dose: '5 Mg/Kg/Day' },
        { name: 'Bumetanide', dose: '0.01-0.02 Mg/Kg/Day' },
        { name: 'Chorthalidone', dose: '1-2 Mg/Kg/Day' },
        { name: 'Furosemide', dose: '2-6 Mg/Kg/Day' },
        { name: 'Hydrochlorthiazide', dose: '1-2 Mg/Kg/Day' },
        { name: 'Metolazone', dose: '0.2-0.4 Mg/Kg/Day' },
        { name: 'Spironolactone', dose: '2-3 Mg/Kg/Day' },
        { name: 'Triamterene', dose: '2-4 Mg/Kg/Day' }
      ]
    },
    {
      name: 'Hormones and Drug for Endocrinal Disorders',
      drugs: [
        { name: 'Cortisone', dose: '0.7-1 Mg/Kg/Day' },
        { name: 'Deflazacort', dose: '0.25-1.5 Mg/Kg/Day' },
        { name: 'Dexamethasone', dose: '0.05-0.5 Mg/Kg/Day' },
        { name: 'Hydrocortisone', dose: '2.5-10 Mg/Kg/Day' },
        { name: 'Methylprednisolone', dose: '0.5-1.7 Mg/Kg/Day' },
        { name: 'Prednisolone', dose: '1-2 Mg/Kg/Day' },
        { name: 'Triamcinolone', dose: '24 Mg/Kg/Day' },
        { name: 'ACTH', dose: '0.8-1.6 units/Kg stat' },
        { name: 'Desmopressin', dose: '5-40 /day' },
        { name: 'Leuprolide acetate', dose: '3.75 mg every 4 weeks' },
        { name: 'Somatropin', dose: '0.18-0.35 mg/Kg once a week' },
        { name: 'Stomatostatin', dose: '1-40 µg/kg/day every 2-4 weeks' },
        { name: 'Vasopressin', dose: '5-20 units every 4 hours SC or IM' },
        { name: 'Insulin for DKA', dose: '0.05-0.1 unit/Kg/hour continue infusion' },
        { name: 'Insulin for type 1 DM', dose: '0.2-0.4 unit/kg/Day' },
        { name: 'Carbimazole', dose: '1-2 Mg/Kg/Day' },
        { name: 'Liothyronine sodium', dose: '0.5-1.5 Mg/Kg/Day' },
        { name: 'Methimazole', dose: '0.25-1 Mg/Kg/Day' },
        { name: 'Propylthiouracil', dose: '1-4 Mg/Kg/Day' },
        { name: 'Thyroxine sodium', dose: '2-15 /Day' }
      ]
    },
    {
      name: 'Sedative and Antidepressants',
      drugs: [
        { name: 'Amitriptyline hydrochloride', dose: '1-1.5 Mg/Kg/Day' },
        { name: 'Atomoxetin', dose: '0.5 Mg/Kg/Day' },
        { name: 'Chlordiazepoxide', dose: '0.3-0.5 Mg/Kg/Day' },
        { name: 'Chlor promazine hydrochloride', dose: '2.5-6 Mg/Kg/Day' },
        { name: 'Clonidine', dose: '1 µg/Kg every 6-8 hourly' },
        { name: 'Diazepam', dose: '0.1-0.2 mg/Kg/Dose' },
        { name: 'Fluoxetine', dose: '5-20 Mg/Kg/Day' },
        { name: 'Imipramine', dose: '1.5 Mg/Kg/Day' },
        { name: 'Midazolam', dose: '0.5-0.75 Mg/Kg/Day' },
        { name: 'Nitrazepam', dose: '0.5-1 Mg/Kg/Day' },
        { name: 'Promethazine', dose: '0.5-1.5 Mg/Kg/Day' },
        { name: 'Triclofos', dose: '20 Mg/Kg/Day' }
      ]
    },
    {
      name: 'Vasodilators',
      drugs: [
        { name: 'Captopril', dose: '0.1-2 Mg/Kg/Day' },
        { name: 'Hydralazine', dose: '0.1-1 Mg/Kg/Day' },
        { name: 'Isosorbide', dose: '0.1-2 Mg/Kg/Day' },
        { name: 'Isoxsuprine', dose: '0.5-1 Mg/Kg/Day' },
        { name: 'Nifedipine', dose: '0.6-0.9 Mg/Kg/Day' },
        { name: 'Prazosin', dose: '10-50 µg/Kg/Dose' },
        { name: 'Sodium nitroprusside', dose: '0.3-0.6 µg/Kg/Dose' }
      ]
    },
    {
      name: 'Vitamins and Hematinic',
      drugs: [
        { name: 'Alfacalcidol (Vit-D)', dose: '0.1-1 µg/Kg/Dose' },
        { name: 'Folic Acid', dose: '25-150 µg/Kg/Dose' },
        { name: 'Iron', dose: '1-6 Mg/Kg/Day' },
        { name: 'Vitamin A', dose: '400-1000 iu /day' },
        { name: 'Vitamin B12', dose: '250-1000 µg IM on alternate day for 1-2 week than weekly' },
        { name: 'Vitamin C', dose: '30-300 mg/Day' },
        { name: 'Vitamin D3 (cholecalciferol)', dose: '400 iu/day' }
      ]
    },
    {
      name: 'Others',
      drugs: [
        { name: 'Acetazolamide', dose: '5-8 mg/kg/Day' },
        { name: 'Albumin solution (Human)', dose: '0.5-1.0 G/Kg/Dose' },
        { name: 'Caffeine', dose: '10-20 mg/kg/Day' },
        { name: 'Calcium Gluconate', dose: '1-2 Ml/Kg/dose' }
      ]
    }
  ];

  const calculateDose = () => {
    if (!weight || !selectedDrug) return;

    const category = categories.find(c => c.name === selectedCategory);
    if (!category) return;

    const drug = category.drugs.find(d => d.name === selectedDrug);
    if (!drug) return;

    // Special cases for complex dosing regimens
    if (drug.name === 'Artemether') {
      setCalculatedDose(`First day: ${(weight * 3.2).toFixed(2)} mg, then ${(weight * 1.6).toFixed(2)} mg daily for 5 days`);
      return;
    }

    if (drug.name === 'Chloroquine') {
      setCalculatedDose(`Initial: ${(weight * 10).toFixed(2)} mg, followed by ${(weight * 5).toFixed(2)} mg at 6h, 24h, and 48h`);
      return;
    }

    // Handle different units (mg, µg, units, etc.)
    const doseMatch = drug.dose.match(/(\d+(?:\.\d+)?)-?(\d+(?:\.\d+)?)?/);
    if (!doseMatch) {
      setCalculatedDose(`Special dosing regimen: ${drug.dose}`);
      return;
    }

    const minDose = parseFloat(doseMatch[1]);
    const maxDose = doseMatch[2] ? parseFloat(doseMatch[2]) : minDose;

    let unit = 'mg';
    if (drug.dose.toLowerCase().includes('microgram') || drug.dose.includes('µg')) {
      unit = 'µg';
    } else if (drug.dose.toLowerCase().includes('unit')) {
      unit = 'units';
    }

    const calculatedMinDose = (weight * minDose).toFixed(2);
    const calculatedMaxDose = (weight * maxDose).toFixed(2);

    if (minDose === maxDose) {
      setCalculatedDose(`${calculatedMinDose} ${unit}`);
    } else {
      setCalculatedDose(`${calculatedMinDose} - ${calculatedMaxDose} ${unit}`);
    }
  };

  useEffect(() => {
    calculateDose();
  }, [weight, selectedDrug]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-4">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center gap-2 mb-6">
          <Calculator className="w-6 h-6 text-blue-600" />
          <h1 className="text-2xl font-bold text-gray-800">Pediatric Drug Calculator</h1>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Patient Weight (kg)
            </label>
            <input
              type="number"
              value={weight || ''}
              onChange={(e) => setWeight(parseFloat(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter weight in kg"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Drug Category
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => {
                setSelectedCategory(e.target.value);
                setSelectedDrug('');
                setCalculatedDose('');
              }}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select category</option>
              {categories.map((category) => (
                <option key={category.name} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          {selectedCategory && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Drug Name
              </label>
              <select
                value={selectedDrug}
                onChange={(e) => setSelectedDrug(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select drug</option>
                {categories
                  .find((c) => c.name === selectedCategory)
                  ?.drugs.map((drug) => (
                    <option key={drug.name} value={drug.name}>
                      {drug.name} ({drug.dose})
                    </option>
                  ))}
              </select>
            </div>
          )}

          {calculatedDose && (
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">Calculated Dose:</h2>
              <p className="text-2xl font-bold text-blue-600">{calculatedDose}</p>
              <p className="text-sm text-gray-600 mt-2">
                Based on patient weight: {weight} kg
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;