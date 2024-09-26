
const fieldToCategoryMap: { [key: string]: string[] } = {
    'Computer Science': [
        'Software Engineering', 'Cybersecurity', 'Artificial Intelligence', 'Machine Learning', 
        'Deep Learning', 'Data Science', 'Computer Architecture', 'Networking', 
        'Cloud Computing', 'Internet of Things (IoT)', 'Discrete Mathematics', 'Algorithms', 
        'Database Management', 'Human-Computer Interaction', 'Blockchain', 'Quantum Computing'
    ],
    'Business': [
        'Business Administration', 'Macroeconomics', 'Investment', 'Personal Finance', 
        'Digital Marketing', 'Consumer Behavior', 'Recruitment & Talent Acquisition', 
        'Operations Management', 'Leadership', 'Project Management', 'Supply Chain Management', 
        'Corporate Finance', 'Entrepreneurship', 'Business Analytics', 'Sales Management', 
        'E-commerce', 'Brand Management'
    ],
    'Physics': [
        'Theoretical Physics', 'Quantum Mechanics', 'Optics', 'Astrophysics', 
        'Thermodynamics', 'Electromagnetism', 'Particle Physics', 'Nuclear Physics', 
        'Condensed Matter Physics', 'Statistical Mechanics', 'Plasma Physics', 
        'Relativity', 'Quantum Field Theory', 'Gravitational Physics', 'String Theory'
    ],
    'Biology': [
        'Molecular Biology', 'Genetics', 'Ecology', 'Evolutionary Biology', 
        'Microbiology', 'Cell Biology', 'Neuroscience', 'Botany', 
        'Zoology', 'Marine Biology', 'Immunology', 'Bioinformatics', 
        'Biotechnology', 'Virology', 'Developmental Biology', 'Physiology'
    ],
    'Chemistry': [
        'Organic Chemistry', 'Inorganic Chemistry', 'Biochemistry', 'Analytical Chemistry', 
        'Physical Chemistry', 'Theoretical Chemistry', 'Polymer Chemistry', 'Medicinal Chemistry', 
        'Environmental Chemistry', 'Materials Science', 'Chemical Engineering', 'Quantum Chemistry', 
        'Electrochemistry', 'Supramolecular Chemistry', 'Nanotechnology'
    ],
    'History': [
        'World History', 'Ancient Civilizations', 'Medieval History', 'Modern History', 
        'Cultural History', 'Military History', 'Social History', 'Economic History', 
        'Political History', 'Art History', 'Historiography', 'History of Science', 
        'History of Technology', 'Renaissance History', 'Colonialism', 'Post-Colonial History'
    ],
    'Geography': [
        'Physical Geography', 'Human Geography', 'Environmental Geography', 'Cartography', 
        'Geomorphology', 'Climatology', 'Geospatial Analysis', 'Urban Geography', 
        'Population Geography', 'Economic Geography', 'Cultural Geography', 'Political Geography', 
        'Oceanography', 'Sustainable Development', 'Global Positioning Systems (GPS)'
    ],
    'Literature': [
        'World Literature', 'Classical Literature', 'Modern Literature', 'Comparative Literature', 
        'Postcolonial Literature', 'Literary Theory', 'Feminist Literature', 'Science Fiction', 
        'Fantasy Literature', 'Poetry', 'Drama', 'Romanticism', 'Realism', 'Modernism', 
        'Literary Criticism', 'Epic Poetry'
    ],
    'Art': [
        'Painting', 'Sculpture', 'Photography', 'Digital Art', 'Graphic Design', 
        'Art History', 'Contemporary Art', 'Visual Arts', 'Ceramics', 'Printmaking', 
        'Mixed Media', 'Conceptual Art', 'Installation Art', 'Street Art', 'Performance Art'
    ],
    'Music': [
        'Classical Music', 'Jazz', 'Pop Music', 'Music Theory', 'Music Composition', 
        'Ethnomusicology', 'Electronic Music', 'Folk Music', 'Opera', 'Orchestration', 
        'Music Production', 'Musical Theatre', 'Film Scoring', 'Musicology', 'World Music', 
        'Music Performance', 'Sound Engineering'
    ],
    'Economics': [
        'Microeconomics', 'Macroeconomics', 'Behavioral Economics', 'Development Economics', 
        'International Economics', 'Environmental Economics', 'Labor Economics', 'Health Economics', 
        'Public Economics', 'Econometrics', 'Game Theory', 'Financial Economics', 
        'Monetary Economics', 'Industrial Organization', 'Political Economy', 'Welfare Economics'
    ],
    'Philosophy': [
        'Ethics', 'Logic', 'Metaphysics', 'Epistemology', 'Aesthetics', 'Political Philosophy', 
        'Philosophy of Science', 'Philosophy of Mind', 'Existentialism', 'Phenomenology', 
        'Stoicism', 'Postmodern Philosophy', 'Feminist Philosophy', 'Philosophy of Religion', 
        'Ancient Philosophy', 'Medieval Philosophy', 'Analytic Philosophy', 'Continental Philosophy'
    ],
    'Psychology': [
        'Clinical Psychology', 'Cognitive Psychology', 'Developmental Psychology', 'Social Psychology', 
        'Educational Psychology', 'Forensic Psychology', 'Health Psychology', 'Neuropsychology', 
        'Behavioral Psychology', 'Personality Psychology', 'Abnormal Psychology', 'Psychotherapy', 
        'Sports Psychology', 'Industrial-Organizational Psychology', 'Positive Psychology', 
        'Psychometrics'
    ]
};


