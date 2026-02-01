-- Create courses table
CREATE TABLE public.courses (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  stream TEXT NOT NULL CHECK (stream IN ('Science', 'Commerce', 'Arts', 'Medical', 'Engineering', 'Other')),
  duration TEXT NOT NULL,
  eligibility TEXT NOT NULL,
  description TEXT NOT NULL,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create colleges table
CREATE TABLE public.colleges (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  location TEXT NOT NULL,
  affiliation TEXT NOT NULL,
  courses_offered TEXT[] NOT NULL DEFAULT '{}',
  admission_process TEXT,
  website_url TEXT,
  image_url TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create blog_posts table
CREATE TABLE public.blog_posts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  category TEXT NOT NULL,
  image_url TEXT,
  is_published BOOLEAN DEFAULT false,
  published_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create enquiries table
CREATE TABLE public.enquiries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  interest TEXT NOT NULL,
  message TEXT,
  is_read BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create testimonials table
CREATE TABLE public.testimonials (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  content TEXT NOT NULL,
  image_url TEXT,
  rating INTEGER DEFAULT 5 CHECK (rating >= 1 AND rating <= 5),
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on all tables
ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.colleges ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.enquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;

-- Public read policies for courses, colleges, blog_posts, testimonials
CREATE POLICY "Anyone can view active courses" ON public.courses FOR SELECT USING (is_active = true);
CREATE POLICY "Anyone can view active colleges" ON public.colleges FOR SELECT USING (is_active = true);
CREATE POLICY "Anyone can view published blog posts" ON public.blog_posts FOR SELECT USING (is_published = true);
CREATE POLICY "Anyone can view active testimonials" ON public.testimonials FOR SELECT USING (is_active = true);

-- Public insert policy for enquiries (anyone can submit an enquiry)
CREATE POLICY "Anyone can submit enquiries" ON public.enquiries FOR INSERT WITH CHECK (true);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Add triggers for updated_at
CREATE TRIGGER update_courses_updated_at BEFORE UPDATE ON public.courses FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_colleges_updated_at BEFORE UPDATE ON public.colleges FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_blog_posts_updated_at BEFORE UPDATE ON public.blog_posts FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Insert sample courses
INSERT INTO public.courses (name, stream, duration, eligibility, description) VALUES
('Bachelor of Technology (B.Tech)', 'Engineering', '4 Years', 'Class 12 with PCM, JEE Main/State CET', 'Engineering degree covering various specializations like Computer Science, Mechanical, Civil, Electronics, and more.'),
('Bachelor of Medicine (MBBS)', 'Medical', '5.5 Years', 'Class 12 with PCB, NEET Qualified', 'Professional medical degree to become a registered medical practitioner in India.'),
('Bachelor of Commerce (B.Com)', 'Commerce', '3 Years', 'Class 12 with Commerce', 'Undergraduate degree in commerce, accounting, and business studies.'),
('Bachelor of Arts (BA)', 'Arts', '3 Years', 'Class 12 in any stream', 'Liberal arts degree with various specialization options in humanities and social sciences.'),
('BSc Nursing', 'Medical', '4 Years', 'Class 12 with PCB, 45% marks', 'Professional nursing degree preparing students for healthcare careers.'),
('Bachelor of Business Administration (BBA)', 'Commerce', '3 Years', 'Class 12 in any stream', 'Management degree focusing on business fundamentals and leadership skills.'),
('Bachelor of Science (BSc)', 'Science', '3 Years', 'Class 12 with Science', 'Science degree with specializations in Physics, Chemistry, Biology, Mathematics, and more.'),
('Bachelor of Computer Applications (BCA)', 'Science', '3 Years', 'Class 12 with Mathematics', 'IT-focused degree covering programming, databases, and software development.');

-- Insert sample colleges
INSERT INTO public.colleges (name, location, affiliation, courses_offered, admission_process, image_url) VALUES
('Delhi University', 'New Delhi', 'UGC', ARRAY['BA', 'B.Com', 'BSc', 'BBA'], 'CUET Score based admission', 'https://images.unsplash.com/photo-1562774053-701939374585?w=800'),
('IIT Bombay', 'Mumbai', 'AICTE', ARRAY['B.Tech', 'M.Tech', 'PhD'], 'JEE Advanced Rank', 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800'),
('AIIMS Delhi', 'New Delhi', 'Medical Council of India', ARRAY['MBBS', 'MD', 'MS'], 'NEET UG/PG Rank', 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800'),
('Christ University', 'Bangalore', 'UGC', ARRAY['BA', 'B.Com', 'BBA', 'BSc'], 'University Entrance Test', 'https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=800'),
('Manipal Academy', 'Manipal', 'UGC/NAAC', ARRAY['BSc Nursing', 'B.Tech', 'MBBS'], 'MET Entrance Exam', 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800');

-- Insert sample testimonials
INSERT INTO public.testimonials (name, role, content, rating) VALUES
('Priya Sharma', 'Engineering Student', 'Path Up helped me choose the right engineering branch. Their counselors understood my interests and guided me to Computer Science. Now I am at IIT Delhi!', 5),
('Rahul Verma', 'Medical Student', 'I was confused between MBBS and BDS. The career counseling session at Path Up cleared all my doubts. They even helped with NEET preparation guidance.', 5),
('Anjali Gupta', 'Parent', 'As a parent, I wanted the best for my daughter. Path Up provided honest advice about nursing careers and helped us find the right college. Highly recommended!', 5),
('Vikram Singh', 'Commerce Graduate', 'After +2 Commerce, I had no idea what to pursue. Path Up showed me various options and I chose CA. Their guidance was invaluable.', 5);

-- Insert sample blog posts
INSERT INTO public.blog_posts (title, slug, excerpt, content, category, is_published, published_at, image_url) VALUES
('Top 10 Career Options After 12th Science', 'top-careers-after-12th-science', 'Explore the best career paths available for science students after completing their 12th grade.', 'After completing 12th with Science stream, students have numerous career options available. From engineering to medical sciences, here are the top 10 careers you can pursue...

1. Engineering (B.Tech/BE)
2. Medical (MBBS)
3. Architecture
4. Pharmacy
5. Aviation
6. Research Scientist
7. Data Science
8. Biotechnology
9. Environmental Science
10. Forensic Science

Each of these paths offers unique opportunities for growth and success.', 'Career Guidance', true, now(), 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800'),
('How to Choose the Right College', 'how-to-choose-right-college', 'A comprehensive guide to selecting the perfect college for your higher education journey.', 'Choosing the right college is one of the most important decisions you will make. Here are key factors to consider...

1. Accreditation and Recognition
2. Course Curriculum
3. Faculty Quality
4. Infrastructure
5. Placement Records
6. Location and Accessibility
7. Fee Structure
8. Alumni Network

Research thoroughly and visit campuses before making your final decision.', 'College Admissions', true, now(), 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800'),
('Study Abroad: Complete Guide for Indian Students', 'study-abroad-guide-indian-students', 'Everything you need to know about pursuing higher education in foreign countries.', 'Studying abroad opens doors to world-class education and global opportunities. Here is your complete guide...

Popular Destinations:
- USA
- UK
- Canada
- Australia
- Germany

Key Steps:
1. Research universities
2. Check eligibility
3. Prepare for entrance tests (GRE, GMAT, IELTS, TOEFL)
4. Apply for admissions
5. Secure funding/scholarships
6. Apply for student visa

Start your preparation at least 1-2 years before your intended intake.', 'Study Abroad', true, now(), 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800');