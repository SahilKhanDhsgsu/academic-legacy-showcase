import {
  Calendar,
  MapPin,
  Mail,
  Phone,
  GraduationCap,
  Award,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const About = () => {
  const educationHistory = [
    {
      degree: "Ph.D. in Education",
      institution: "Dr. Harisingh Gour University, Sagar (M.P.)",
      year: "1987",
      specialization: "Educational Technology and Methodology",
    },
    {
      degree: "M.Ed. (Master of Education)",
      institution: "Bundelkhand University, Jhansi (U.P.)",
      year: "1984",
      specialization: "Educational Psychology and Curriculum Development",
    },
    {
      degree: "B.Ed. (Bachelor of Education)",
      institution: "Dr. Harisingh Gour University, Sagar (M.P.)",
      year: "Various Programs",
      specialization: "Teaching Methodology and Pedagogy",
    },
  ];

  const careerMilestones = [
    {
      year: "1993-1996",
      position: "Assistant Professor",
      institution: "Vikram University, Ujjain (M.P.)",
      description:
        "Began academic career focusing on educational research and student mentorship",
    },
    {
      year: "1996-1999",
      position: "Associate Professor",
      institution: "Dr. Harisingh Gour University, Sagar (M.P.)",
      description:
        "Advanced to associate level with expanded research responsibilities",
    },
    {
      year: "2000-Present",
      position: "Professor",
      institution: "Dr. Harisingh Gour University, Sagar (M.P.)",
      description:
        "Senior academic position with comprehensive teaching, research, and administrative duties",
    },
  ];

  return (
    <div className="min-h-screen bg-stone-200">
      {/* Header */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-800 mb-6">
              About Professor Saroj Gupta
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              A distinguished academic leader with over three decades of
              commitment to educational excellence, research innovation, and
              student development.
            </p>
          </div>
        </div>
      </section>

      {/* Professional Summary */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Biography */}
            <div className="lg:col-span-2">
              <Card className="bg-white border-slate-200">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-serif font-bold text-slate-800 mb-6">
                    Professional Biography
                  </h2>

                  <div className="prose prose-slate max-w-none">
                    <p className="text-lg text-slate-700 leading-relaxed mb-6">
                      Professor Saroj Gupta stands as a beacon of academic
                      excellence in the field of education, having dedicated
                      over 30 years to advancing knowledge, nurturing students,
                      and contributing to the broader academic community. Based
                      at the prestigious Dr. Harisingh Gour University in Sagar,
                      Madhya Pradesh, Professor Gupta has established herself as
                      a leading authority in educational methodology and
                      research.
                    </p>

                    <p className="text-slate-700 leading-relaxed mb-6">
                      Her academic journey began with a strong foundation in
                      education, culminating in a Ph.D. from Dr. Harisingh Gour
                      University in 1987. This educational background provided
                      the theoretical framework that would later inform her
                      innovative approaches to teaching and research
                      methodology.
                    </p>

                    <p className="text-slate-700 leading-relaxed mb-6">
                      Throughout her illustrious career, Professor Gupta has
                      been recognized with over 150 awards and honors, a
                      testament to her exceptional contributions across
                      teaching, research, and service to the academic community.
                      These accolades reflect not only her individual
                      achievements but also her positive impact on countless
                      students and colleagues.
                    </p>

                    <p className="text-slate-700 leading-relaxed mb-6">
                      Her research work has comprehensive academic work,
                      encompassing various aspects of educational theory,
                      methodology, and practice. Professor Gupta's publications
                      contribute significantly to the discourse on modern
                      educational approaches and have influenced educational
                      policies and practices both nationally and
                      internationally.
                    </p>

                    <p className="text-slate-700 leading-relaxed">
                      Beyond her research and teaching responsibilities,
                      Professor Gupta is deeply committed to mentorship and
                      student development. Her approach to education emphasizes
                      not just the transfer of knowledge but the cultivation of
                      critical thinking, creativity, and ethical responsibility
                      in the next generation of educators and researchers.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">

              <Card className="bg-white p-4">
                <div className="w-full h-full aspect-square rounded-xl overflow-hidden">
                  <img
                    src="/lovable-uploads/cfad9cfa-6c44-4bdc-8c5e-e6691702b1b3.png"
                    alt="Prof. Saroj Gupta"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Card>

              <Card className="bg-white border-slate-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-slate-800 mb-4">
                    Contact Information
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-slate-600 mt-0.5" />
                      <div className="text-sm text-slate-700">
                        <p className="font-medium">Department of Education</p>
                        <p>Dr. Harisingh Gour University</p>
                        <p>Sagar, Madhya Pradesh 470001</p>
                        <p>India</p>
                      </div>
                    </div>

                    <Separator />

                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-slate-600" />
                      <div className="text-sm text-slate-700">
                        <a
                          href="mailto:sarojgupta1234@gmail.com"
                          className="hover:text-blue-600 transition-colors"
                        >
                          sarojgupta1234@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-slate-600" />
                      <div className="text-sm text-slate-700">
                        <p>+91-9425693570</p>
                        <p>+91-7000696501</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-slate-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-slate-800 mb-4">
                    Key Achievements
                  </h3>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Award className="h-5 w-5 text-amber-600" />
                      <span className="text-sm text-slate-700">
                        150+ Awards & Honors
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <GraduationCap className="h-5 w-5 text-blue-600" />
                      <span className="text-sm text-slate-700">
                        30 Years in Academia
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Calendar className="h-5 w-5 text-green-600" />
                      <span className="text-sm text-slate-700">
                        Joined Service: 1989
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Background */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-slate-800 mb-12 text-center">
            Educational Background
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {educationHistory.map((education, index) => (
              <Card
                key={index}
                className="border-slate-200 hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="text-center">
                    <GraduationCap className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">
                      {education.degree}
                    </h3>
                    <p className="text-slate-600 mb-2 text-sm">
                      {education.institution}
                    </p>
                    <div className="text-sm text-slate-500 mb-3">
                      {education.year}
                    </div>
                    <p className="text-sm text-slate-700">
                      {education.specialization}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Career Progression */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-slate-800 mb-12 text-center">
            Career Progression
          </h2>

          <div className="space-y-8">
            {careerMilestones.map((milestone, index) => (
              <Card key={index} className="bg-white border-slate-200">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <div className="md:w-32 flex-shrink-0">
                      <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium text-center">
                        {milestone.year}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-slate-800 mb-2">
                        {milestone.position}
                      </h3>
                      <p className="text-slate-600 mb-3">
                        {milestone.institution}
                      </p>
                      <p className="text-slate-700">{milestone.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
