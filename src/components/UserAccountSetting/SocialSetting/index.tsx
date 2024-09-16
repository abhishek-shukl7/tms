/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const SocialSetting: React.FC = () => {
    
return (
    <div className="acc-edit">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="facebook">Facebook:</label>
                                        <input type="text" className="form-control" id="facebook" value="www.facebook.com"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="twitter">Twitter:</label>
                                        <input type="text" className="form-control" id="twitter" value="www.twitter.com"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="google">Google +:</label>
                                        <input type="text" className="form-control" id="google" value="www.google.com"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="instagram">Instagram:</label>
                                        <input type="text" className="form-control" id="instagram" value="www.instagram.com"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="youtube">You Tube:</label>
                                        <input type="text" className="form-control" id="youtube" value="www.youtube.com"/>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                    <button type="reset" className="btn iq-bg-danger">Cancel</button>
                                </form>
                            </div>
  );
};

export default SocialSetting;