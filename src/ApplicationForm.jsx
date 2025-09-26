import React, { useState } from 'react';

const ApplicationForm = ({ onBack, onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    linkedin: '',
    github: '',
    portfolio: '',
    resume: null
  });
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [fileName, setFileName] = useState('Inbox');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        resume: file
      }));
      setFileName(file.name);
    } else {
      setFormData(prev => ({
        ...prev,
        resume: null
      }));
      setFileName('Inbox');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessPopup(true);
  };

  const closePopup = () => {
    setShowSuccessPopup(false);
    setFormData({
      name: '',
      email: '',
      role: '',
      linkedin: '',
      github: '',
      portfolio: '',
      resume: null
    });
    setFileName('Inbox');
    // Navigate back to the main app after successful submission
    onBack();
  };

  const uploadIconClick = () => {
    document.getElementById('resume-input').click();
  };

  return (
    <div style={{
      background: '#fff',
      minHeight: '100vh',
      fontFamily: "'Nunito', Arial, sans-serif",
      width: '100vw',
      overflowX: 'hidden',
      margin: 0,
      padding: 0,
    }}>
      <main style={{
        maxWidth: '900px',
        margin: '0 auto',
        padding: '36px 10px 0 10px',
      }}>
        <h1 style={{
          color: '#170961',
          fontWeight: '900',
          fontFamily: "'Oswald', Arial, sans-serif",
          fontSize: '2.6rem',
          textAlign: 'center',
          marginBottom: '7px',
          marginTop: '0px',
          letterSpacing: '1px',
        }}>
          Join Our Team
        </h1>
        <div style={{
          fontSize: '1.12rem',
          color: '#242424',
          textAlign: 'center',
          marginBottom: '34px',
          fontFamily: "'Nunito', Arial, sans-serif"
        }}>
          Apply to your preferred available role and become part of our innovative team
        </div>
        
        <div style={{
          background: '#fff',
          borderRadius: '12px',
          boxShadow: '0 2px 16px rgba(36,36,36,0.09)',
          padding: '36px 38px 24px 38px',
          maxWidth: '765px',
          margin: '0 auto',
          border: '1px solid #ececec',
          marginBottom: '26px',
        }}>
          <div style={{
            fontWeight: '700',
            fontSize: '1.13rem',
            fontFamily: "'Oswald', Arial, sans-serif",
            color: '#170961',
            marginBottom: '18px',
            textAlign: 'center',
          }}>
            Basic Details
          </div>
          
          {/* Full Name */}
          <label style={{
            display: 'block',
            fontWeight: '500',
            fontSize: '1rem',
            marginBottom: '3px',
            color: '#242424',
            fontFamily: "'Oswald', Arial, sans-serif"
          }}>Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            placeholder="Enter your Full name"
            style={{
              width: '100%',
              marginBottom: '18px',
              padding: '12px',
              fontSize: '1rem',
              borderRadius: '10px',
              border: 'none',
              outline: 'none',
              boxShadow: '0 2px 8px rgba(36,36,36,0.09)',
              boxSizing: 'border-box',
              fontFamily: "'Nunito', Arial, sans-serif"
            }}
          />

          {/* Email Address */}
          <label style={{
            display: 'block',
            fontWeight: '500',
            fontSize: '1rem',
            marginBottom: '3px',
            color: '#242424',
            fontFamily: "'Oswald', Arial, sans-serif"
          }}>Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            placeholder="Enter your Email Address"
            style={{
              width: '100%',
              marginBottom: '18px',
              padding: '12px',
              fontSize: '1rem',
              borderRadius: '10px',
              border: 'none',
              outline: 'none',
              boxShadow: '0 2px 8px rgba(36,36,36,0.09)',
              boxSizing: 'border-box',
              fontFamily: "'Nunito', Arial, sans-serif"
            }}
          />

          {/* Interested Role */}
          <label style={{
            display: 'block',
            fontWeight: '500',
            fontSize: '1rem',
            marginBottom: '3px',
            color: '#242424',
            fontFamily: "'Oswald', Arial, sans-serif"
          }}>Interested Role</label>
          <select
            name="role"
            value={formData.role}
            onChange={handleInputChange}
            required
            style={{
              width: '100%',
              marginBottom: '18px',
              padding: '12px',
              fontSize: '1rem',
              borderRadius: '10px',
              border: 'none',
              outline: 'none',
              boxShadow: '0 2px 8px rgba(36,36,36,0.09)',
              background: '#fff',
              boxSizing: 'border-box',
              color: '#242424',
              fontFamily: "'Nunito', Arial, sans-serif"
            }}
          >
            <option value="" disabled>Select your interested role</option>
            <option value="Software Engineer">Software Engineer</option>
            <option value="Frontend/Backend Developer">Frontend/Backend Developer</option>
            <option value="Coding Instructor">Coding Instructor</option>
            <option value="Business Development Lead">Business Development Lead</option>
            <option value="Digital Marketing Specialist">Digital Marketing Specialist</option>
            <option value="Robotics Engineer (Tutor)">Robotics Engineer (Tutor)</option>
            <option value="Video Editor">Video Editor</option>
          </select>

          {/* LinkedIn and Github - Side by Side */}
          <div style={{ display: 'flex', gap: '15px' }}>
            <div style={{ flex: 1 }}>
              <label style={{
                display: 'block',
                fontWeight: '500',
                fontSize: '1rem',
                marginBottom: '3px',
                color: '#242424',
                fontFamily: "'Oswald', Arial, sans-serif"
              }}>LinkedIn profile (URL)</label>
              <input
                type="url"
                name="linkedin"
                value={formData.linkedin}
                onChange={handleInputChange}
                placeholder="Enter your linkedin link"
                style={{
                  width: '100%',
                  marginBottom: '18px',
                  padding: '12px',
                  fontSize: '1rem',
                  borderRadius: '10px',
                  border: 'none',
                  outline: 'none',
                  boxShadow: '0 2px 8px rgba(36,36,36,0.09)',
                  boxSizing: 'border-box',
                  fontFamily: "'Nunito', Arial, sans-serif"
                }}
              />
            </div>
            
            <div style={{ flex: 1 }}>
              <label style={{
                display: 'block',
                fontWeight: '500',
                fontSize: '1rem',
                marginBottom: '3px',
                color: '#242424',
                fontFamily: "'Oswald', Arial, sans-serif"
              }}>Github link (URL)</label>
              <input
                type="url"
                name="github"
                value={formData.github}
                onChange={handleInputChange}
                placeholder="Enter your github link"
                style={{
                  width: '100%',
                  marginBottom: '18px',
                  padding: '12px',
                  fontSize: '1rem',
                  borderRadius: '10px',
                  border: 'none',
                  outline: 'none',
                  boxShadow: '0 2px 8px rgba(36,36,36,0.09)',
                  boxSizing: 'border-box',
                  fontFamily: "'Nunito', Arial, sans-serif"
                }}
              />
            </div>
          </div>

          {/* Portfolio */}
          <label style={{
            display: 'block',
            fontWeight: '500',
            fontSize: '1rem',
            marginBottom: '3px',
            color: '#242424',
            fontFamily: "'Oswald', Arial, sans-serif"
          }}>Portfolio</label>
          <input
            type="url"
            name="portfolio"
            value={formData.portfolio}
            onChange={handleInputChange}
            placeholder="Enter your portfolio link"
            style={{
              width: '100%',
              marginBottom: '18px',
              padding: '12px',
              fontSize: '1rem',
              borderRadius: '10px',
              border: 'none',
              outline: 'none',
              boxShadow: '0 2px 8px rgba(36,36,36,0.09)',
              boxSizing: 'border-box',
              fontFamily: "'Nunito', Arial, sans-serif"
            }}
          />

          {/* Resume Upload */}
          <label style={{
            display: 'block',
            fontWeight: '500',
            fontSize: '1rem',
            marginBottom: '3px',
            color: '#242424',
            fontFamily: "'Oswald', Arial, sans-serif"
          }}>Upload a Resume</label>
          <div onClick={uploadIconClick} style={{
            marginBottom: '18px',
            border: '1.5px dashed #170961',
            borderRadius: '10px',
            boxShadow: '0 2px 8px rgba(36,36,36,0.09)',
            padding: '16px',
            textAlign: 'center',
            cursor: 'pointer',
            position: 'relative',
            width: '250px',
            display: 'inline-block',
            fontFamily: "'Nunito', Arial, sans-serif"
          }}>
            <input
              id="resume-input"
              type="file"
              accept=".pdf,.png"
              onChange={handleFileChange}
              style={{ display: 'none' }}
            />
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <svg width="36" height="36" fill="none">
                <path d="M18 29V13M18 13l-5 5m5-5l5 5" stroke="#170961" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <rect x="4" y="4" width="28" height="28" rx="7" stroke="#170961" strokeWidth="1.5" />
              </svg>
            </div>
            <div style={{
              marginTop: '6px',
              color: '#242424',
              fontWeight: '500',
              fontSize: '0.9rem',
              fontFamily: "'Nunito', Arial, sans-serif"
            }}>
              Upload a Resume here (PNG/PDF)<br />
              <span style={{ color: formData.resume ? '#14A388' : 'inherit' }}>
                {fileName}
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button
              type="button"
              onClick={handleSubmit}
              style={{
                background: '#170961',
                color: '#fff',
                border: 'none',
                borderRadius: '9px',
                fontSize: '1.15rem',
                fontWeight: '600',
                padding: '13px 0',
                boxShadow: '0 2px 8px rgba(36,36,36,0.13)',
                cursor: 'pointer',
                width: '210px',
                marginTop: '18px',
                fontFamily: "'Nunito', Arial, sans-serif"
              }}
            >
              Submit Application
            </button>
          </div>
        </div>
      </main>

      {/* Success Popup */}
      {showSuccessPopup && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, width: '100vw', height: '100vh',
          background: 'rgba(0,0,0,0.21)', zIndex: 1000,
          display: 'flex', justifyContent: 'center', alignItems: 'center',
        }}>
          <div style={{
            background: '#fff',
            borderRadius: '17px',
            padding: '38px 32px',
            boxShadow: '0 8px 32px rgba(36,36,36,0.15)',
            textAlign: 'center',
            minWidth: '360px',
            maxWidth: '90vw',
            fontFamily: "'Nunito', Arial, sans-serif"
          }}>
            <div style={{ marginBottom: '18px' }}>
              <svg width="54" height="54" viewBox="0 0 54 54" fill="none">
                <circle cx="27" cy="27" r="27" fill="#14A388"/>
                <path d="M18 28l6.3 6.3L36 22.6" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="39" cy="12" r="2.2" fill="#14A388"/>
                <circle cx="14" cy="16" r="1.6" fill="#14A388"/>
                <circle cx="46" cy="26" r="1.2" fill="#14A388"/>
              </svg>
            </div>
            <div style={{
              fontWeight: '600', fontSize: '1.25rem', color: '#242424', marginBottom: '9px',
              fontFamily: "'Oswald', Arial, sans-serif"
            }}>
              Application Submitted Successfully
            </div>
            <div style={{
              color: '#7A7A7A', fontSize: '1.05rem', marginBottom: '7px',
              fontFamily: "'Nunito', Arial, sans-serif"
            }}>
              You will receive an email once the process is complete
            </div>
            <button
              onClick={closePopup}
              style={{
                marginTop: '14px',
                background: '#14A388',
                color: '#fff',
                border: 'none',
                padding: '10px 32px',
                borderRadius: '9px',
                fontWeight: '500',
                fontSize: '1rem',
                boxShadow: '0 2px 8px rgba(36,36,36,0.13)',
                cursor: 'pointer',
                fontFamily: "'Nunito', Arial, sans-serif"
              }}
            >Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ApplicationForm;